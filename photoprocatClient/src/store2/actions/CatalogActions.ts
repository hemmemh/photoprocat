import jwtDecode from "jwt-decode";
import { addItemToBasket, getBasket, removeItemFromBasket } from "../../https/basketApi";
import { getAllBrands } from "../../https/brandsApi";
import { addItemToCompare, getCompare, removeItemFromCompare } from "../../https/compareApi";
import { addProductInLoves, getLoves, removeProductFromLoves } from "../../https/lovesApi";
import { addRaiting, createProduct, getAllproduct, getByPurchase, getOneproduct } from "../../https/productApi";
import { refresh } from "../../https/userApi";
import { catalogSlice } from "../reducers/CatalogSlice";
import { navbarSlice } from "../reducers/NavBarSlice";
import { productSlice } from "../reducers/ProductSlice";
import { AppDispatch, store } from "../store";
import { adminSlice } from "../reducers/AdminSlice";
import { HOME_ROUTE } from "../../app/config/routs";
import { log } from "console";
import { IProducts } from "../../utils/interfaces";



export const getAllInfo = (action:any[])=> async (dispatch:AppDispatch)=>
{
  const currentState = store.getState();
const {checkedBrands,products} = currentState.reducer.catalog
const {setBrands,setBrandsLoad,setCheckedBrands,setProducts,setPage,setType} = catalogSlice.actions
  try {

    const data = await getAllproduct(...action)

    dispatch(setProducts({...data}))
    dispatch(setType(data.type))
    dispatch(setPage(action[1]))
    dispatch(changeInformations(data,action))

    const brands = await getAllBrands()
    dispatch(setBrands(brands))
    dispatch(setBrandsLoad(true))

    
    const newCheckedBrands = JSON.parse(action[4])

    if (newCheckedBrands.length !== 0) {
      dispatch(setCheckedBrands(newCheckedBrands))
  
    }else{
      dispatch(setCheckedBrands(checkedBrands))
    }
     
 
    console.log(products);
  } catch (error) {
    console.log(error);
  }
}



export const getProducts = (action:any[])=>async (dispatch:AppDispatch) => {
  try {
    const currentState = store.getState();
    const {type} = currentState.reducer.catalog
    const {setProducts,setProductsLoad,setPage,setType} = catalogSlice.actions

    dispatch(setProductsLoad(true))
    dispatch(setPage(action[1]))

    const data = await getAllproduct(...action)

    if(type?._id !== data.type._id){
      dispatch(changeInformations(data,action))
       
      }
    
     dispatch( setProducts({...data}))
     dispatch( setType(data.type))
     dispatch(setProductsLoad(true))

  } catch (error) {
    
  }

}

export const chooseBrand = (e:any)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {checkedBrands} = currentState.reducer.catalog
  const {setCheckedBrands} = catalogSlice.actions
  if (checkedBrands.includes(e)) {
    dispatch(setCheckedBrands([...checkedBrands.filter((el:any)=>el!==e)]))
}else{
    dispatch(setCheckedBrands([...checkedBrands,e])  )
}


}


export const changeInformations = (data:IProducts, action:any[])=> async (dispatch:AppDispatch)=>{
  try {
  
    const {setProductsLoad,setTypeInformation,setInformations,setInformationValues,setsliderMouseOn} = catalogSlice.actions

        dispatch(setInitialPrice(data))

       let {
             informationValuesConst,
             informationsConst,
             slideMouseOneConst, 
             typeInformationConst} = buildInformationsData(data)
   
       dispatch(setInformations(informationsConst))
       
  

  
       dispatch(setsliderMouseOn(slideMouseOneConst))

       const newInformationValuesConst = Object.keys(JSON.parse(action[9]))

       if (newInformationValuesConst.length !== 0) {
        dispatch(setInformationValues(JSON.parse(action[9])))
       }else{
        dispatch(setInformationValues(informationValuesConst))
       }

       dispatch(setTypeInformation(typeInformationConst))
       dispatch( setProductsLoad(true))
  } catch (error) {
    console.log('err', error);
    
  }
}


export const putProductsInSlides = ()=> async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {products} = currentState.reducer.catalog
  const {setProducts} = catalogSlice.actions

  try {
    const productsPur = await getByPurchase()
    dispatch(setProducts({...products,responce:productsPur}))

  } catch (error) {
    console.log(error);
  }

}

const setInitialPrice = (data:IProducts)=> async (dispatch:AppDispatch)=>{
  const {setPriceRange,setMinMaxPrice,setPriceValue} = catalogSlice.actions

  let price:any = []
  data.responseForInformations.forEach((el:any)=>price.push(Number(el.price)))
  price = price.sort((a:any,b:any)=>a-b)

  dispatch(setMinMaxPrice([price[0],price[price.length-1]]))
  dispatch(setPriceRange([price[0],price[price.length-1]]))
  dispatch(setPriceValue([price[0],price[price.length-1]]))

}

const buildInformationsData = (data:IProducts)=>{

  let typeInformationConst = {}
  let informationValuesConst = {}
  let informationsConst:any = []
  let slideMouseOneConst:any = {}

  for (const it of JSON.parse(data.responseForInformations[0].type.informations)) {

    let val:any = 'неважно'

    if (Object.entries(it)[0][1] == 'check') {
        val = []
    }else if(Object.entries(it)[0][1] == 'slider'){
        val = [0,0]
        slideMouseOneConst = {...slideMouseOneConst,[Object.entries(it)[0][0]]:[0,0]}
    }
    typeInformationConst = {...typeInformationConst,[Object.entries(it)[0][0]]:Object.entries(it)[0][1]}
    informationValuesConst = {...informationValuesConst,[Object.entries(it)[0][0]]:val}
   }

    for (const it of data.responseForInformations) {
        informationsConst = [...informationsConst,...it.information]
   }

   Object.entries(typeInformationConst).map((el:any)=>{
    const type = el[1]
    const typeName = el[0]
    let arr:any = []
    arr = [...informationsConst.filter((fil:any)=>fil.name == typeName).map((ee:any)=>ee.description)]
    arr = arr.filter((fil:any,pos:any)=> arr.indexOf(fil) === pos)

     
    if (type == 'slider') {
        if(arr.length ===  1){
            informationValuesConst = {...informationValuesConst,[typeName]:[0,Number(arr.sort((a:any,b:any)=>b-a)[0]) ]}
            slideMouseOneConst = {...slideMouseOneConst, [typeName]:[0,Number(arr.sort((a:any,b:any)=>b-a)[0]) ]}
        }else{
            informationValuesConst = {...informationValuesConst,[typeName]:[Number(arr.sort((a:any,b:any)=>a-b)[0]) ,Number(arr.sort((a:any,b:any)=>b-a)[0]) ]}
            slideMouseOneConst = {...slideMouseOneConst, [typeName]:[Number(arr.sort((a:any,b:any)=>a-b)[0]) ,Number(arr.sort((a:any,b:any)=>b-a)[0]) ]}
        }
      
    }else if (type == 'check'){
        informationValuesConst = {...informationValuesConst,[typeName]:[...arr]}
    }else{
        arr.unshift('неважно')
        informationValuesConst = {...informationValuesConst,[typeName]:arr[0]} 
    }
   })


   return {typeInformationConst, informationValuesConst, informationsConst, slideMouseOneConst}



}




























