
import { addOrder, changeAmount, getBasket, removeAll, removeItemFromBasket } from "../../https/basketApi";
import { change} from "../../https/productApi";

import { HOME_ROUTE } from "../../app/config/routs";
import { basketSlice } from "../reducers/BasketSlice";

import { navbarSlice } from "../reducers/NavBarSlice";

import { AppDispatch, store } from "../store";
import { catalogSlice } from "../reducers/CatalogSlice";




export const putBasket = ()=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user} = currentState.reducer.catalog
  const {setProducts,setBasket,setLoad} = basketSlice.actions
  try {
    dispatch(setLoad(true))
    const data = await getBasket({id:user.id})
    dispatch(setBasket(data))
    let arr:any = []

    for (const it of data.basketItems) {
    arr = [...arr, {[it.product._id]:it.count}]
    }
    
    dispatch(setProducts(arr))
  
  } catch (error) {
    console.log(error);
  } finally{
    dispatch(setLoad(false))
  }

}


export const buy = ()=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user} = currentState.reducer.catalog
  const {sumPrice,products} = currentState.reducer.basket
  const {setProducts} = navbarSlice.actions
  try {
    dispatch(setProducts(0))
    getBasket({id:user.id}).then(data=>{
        let arr:any = []
        for (const it of data.basketItems) {
            arr = [...arr, {[it.product._id]:it.count}]
        }
  
  addOrder({ordersId:user.orders,price:sumPrice,products:JSON.stringify(arr)}).then(data=>{
    console.log(data);
    
  })
    }).then(data=>{
        for (const it of products) {
            change({id:Object.keys(it)[0],purchase:1}).then(data=>{
                console.log(data,'---------------');
                
            })
        }
    }).then(()=>{
  
        removeAll({id:user.basket}).then(data=>{
            console.log(data,'7777');
            
        })
        window.location.replace(HOME_ROUTE)
        //window.location.reload();
    })
  } catch (error) {
    console.log(error);
  }

}

export const changeAm = (e:any,el:any,amount:any)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {sumPrice,} = currentState.reducer.basket
  const {setSumPrice} = basketSlice.actions
  try {
    dispatch(setSumPrice(sumPrice - (amount * e.product.price) +(el * e.product.price)))
    changeAmount({id:e._id,count:el}).then(data=>{
        console.log(data);
        
    })
  } catch (error) {
    console.log(error);
  }

}


export const remove = (e:any,amount:any,basketId:any)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {sumPrice,} = currentState.reducer.basket
  const navbar = currentState.reducer.navbar
  const {basket} = currentState.reducer.basket
  const {setSumPrice,setBasket} = basketSlice.actions

  const navbarSl = navbarSlice.actions

  try {
    dispatch(setBasket({...basket, basketItems:basket.basketItems.filter((fil:any)=>fil._id !== e._id)}))
    dispatch(setSumPrice(sumPrice - (e.product.price * amount)))
    dispatch(navbarSl.setProducts(navbar.products - 1))
  removeItemFromBasket({id:e.product._id,basketId}).then(data=>{
    console.log(data);
  })
  } catch (error) {
    console.log(error);
  }

}



















