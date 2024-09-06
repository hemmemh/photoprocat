
import { addItemToBasket,removeAll } from "../../https/basketApi";
import { changeUser, logout } from "../../https/userApi";
import { BASKET_ROUTE, HOME_ROUTE } from "../../app/config/routs";
import { catalogSlice } from "../reducers/CatalogSlice";
import { navbarSlice } from "../reducers/NavBarSlice";
import { AppDispatch, store } from "../store";
import { userSlice } from "../reducers/UserSlice";


export const repeat = (products:any)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user} = currentState.reducer.catalog
  try {
    await  removeAll({id:user.basket})
    for  (const it of products) {
      await addItemToBasket({basketId:user.basket,product:it.product._id,count:it.amount})
    }
    window.location.replace(BASKET_ROUTE)
    window.location.reload()
  } catch (error) {
    console.log(error);
  }

}


export const onSave = ()=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user} = currentState.reducer.catalog
  const {toggle,data,name,serName,tell} = currentState.reducer.user
  const {setLoadData} = userSlice.actions
  try {
    dispatch(setLoadData(true))
    switch(toggle){
      case 0:await changeUser({id:user.id,name,serName,birthDate:data,tell})
      return
      case 1: window.location.replace(HOME_ROUTE)
      return
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadData(false))
  }

}


export const onLogout = ()=>async (dispatch:AppDispatch) => {
  const {setUser} = catalogSlice.actions
  const {setCompare,setProducts} = navbarSlice.actions
  try {
    logout().then(e=>{
      dispatch(setUser({}))
      window.location.replace(HOME_ROUTE)
      dispatch(setCompare(0))
      dispatch(setProducts(0))

  })
    
  } catch (error) {
    console.log(error);
  }

}
























