import { getCompare, removeItemFromCompare, removeItemFromCompareByType } from "../../https/compareApi";
import { ICompareItem } from "../../utils/interfaces";
import { catalogSlice } from "../reducers/CatalogSlice";
import { compareSlice } from "../reducers/CompareSlice";
import { navbarSlice } from "../reducers/NavBarSlice";
import { AppDispatch, store } from "../store";







export const putCompare = ()=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user} = currentState.reducer.catalog
  const {load} = currentState.reducer.compare
  const {sumPrice,products} = currentState.reducer.basket
  const {setProducts} = navbarSlice.actions
  const {setCompareTypes,setActiveType,setInformations,setLoad} = compareSlice.actions

  const {setCompare} = catalogSlice.actions
  try {
    dispatch(setLoad(true))
    const data= await getCompare({id:user.compare})
      dispatch(setCompare(data.compareItems))
      
    
      const typesArr:any = []
      data.compareItems.forEach((el:any)=>{
          if (!typesArr.includes(el.product.type.name)) {
              typesArr.push(el.product.type.name)
          }
     
      dispatch(setCompareTypes(typesArr))
      dispatch(setActiveType(typesArr[0]))
      dispatch(setInformations(data.compareItems.find((el:any)=>el.product.type.name === typesArr[0]).product.information))
      
      
    
    
    })
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoad(false))
  }

}


export const updateCompare = ()=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user,compare} = currentState.reducer.catalog
  const {activeType} = currentState.reducer.compare
  const {setProducts} = navbarSlice.actions
  const {setCompareTypes,setActiveType,setInformations,setActiveTypeLoad} = compareSlice.actions

  const {setCompare} = catalogSlice.actions
  try {
    dispatch(setActiveTypeLoad(false))
        
    const typesArr:any = []
    compare.forEach((el:any)=>{
        if (!typesArr.includes(el.product.type.name)) {
            typesArr.push(el.product.type.name)
        }
    })
    dispatch(setCompareTypes(typesArr))
    
    if (typesArr.length === 0) {
        dispatch(setActiveType('Типы'))
    
    }else{
        if (!compare.find((ell:any)=>ell.product.type.name === activeType)) {
            dispatch(setActiveType(typesArr[0]))
            const item =  compare.find((ell:ICompareItem)=>ell.product.type.name === typesArr[0])
            item &&  dispatch(setInformations(item.product.information ))
            
            
    
        }
       
    }
  } catch (error) {
    console.log(error);
  }

}


export const removeByType = ()=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user,compare} = currentState.reducer.catalog
  const {activeType} = currentState.reducer.compare
  const navbar = navbarSlice.actions
  const {setCompareTypes,setActiveType,setInformations,setActiveTypeLoad} = compareSlice.actions

  const {setCompare} = catalogSlice.actions
  try {
    removeItemFromCompareByType({type:activeType,compareId:user.compare}).then(data=>{
      dispatch( navbar.setCompare(data.compareItems.length))
      dispatch(setCompare(data.compareItems))
      dispatch(setActiveTypeLoad(false)   )
      
  })
  } catch (error) {
    console.log(error);
  }

}


export const changeActiveType = (el:any)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {compare} = currentState.reducer.catalog
  const {setActiveType,setInformations} = compareSlice.actions

  dispatch(setActiveType(el))
  const item =  compare.find((ell:ICompareItem)=>ell.product.type.name === el)
  item &&  dispatch(setInformations(item.product.information ))

}


export const removeItem = (id:any,compareId:any)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {compare} = currentState.reducer.catalog
  const navbar  = currentState.reducer.navbar
  const {setCompare} = catalogSlice.actions
  const navbarSl = navbarSlice.actions
 try {
  dispatch(setCompare([...compare.filter((el:any)=>el.product._id !== id)]))
  dispatch(navbarSl.setCompare(navbar.compare - 1))
  
  removeItemFromCompare({id,compareId}).then((data:any)=>{
      console.log(data);
  })
 } catch (error) {
  console.log(error);
 }


}



























