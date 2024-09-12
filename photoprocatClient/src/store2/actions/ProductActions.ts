import jwtDecode from "jwt-decode";
import { addItemToBasket, getBasket, removeItemFromBasket } from "../../https/basketApi";
import { getAllBrands } from "../../https/brandsApi";
import { addItemToCompare, getCompare, removeItemFromCompare } from "../../https/compareApi";
import { addProductInLoves, getLoves, removeProductFromLoves } from "../../https/lovesApi";
import { addRaiting, createProduct, getAllproduct, getOneproduct } from "../../https/productApi";
import { refresh } from "../../https/userApi";
import { catalogSlice } from "../reducers/CatalogSlice";
import { navbarSlice } from "../reducers/NavBarSlice";
import { productSlice } from "../reducers/ProductSlice";
import { AppDispatch, store } from "../store";
import { adminSlice } from "../reducers/AdminSlice";
import { HOME_ROUTE } from "../../app/config/routs";
import { log } from "console";
import { IProducts } from "../../utils/interfaces";
import { basketSlice } from "../reducers/BasketSlice";
import { loveSlice } from "../reducers/LoveSlice";
import { compareSlice } from "../reducers/CompareSlice";



export const getProduct = (id:string | undefined)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {basket} = currentState.reducer.basket
  const {compare} = currentState.reducer.compare
  const {loves} = currentState.reducer.love
  const {setInCompare,setInLoves,setInBasket,setProduct,setRaiting,setProductLoad} = productSlice.actions

  dispatch(setInBasket(false)) 
  dispatch(setInLoves(false)) 
  dispatch(setInCompare(false)) 
  
try {

  const prod = await getOneproduct({id})
  const raiting = (prod.ratings.reduce((accumulator:any, currentValue:any)=>accumulator + currentValue.rate,0))/prod.ratings.length
  dispatch(setProduct(prod))
  dispatch( setRaiting(raiting))

  if (  basket?.basketItems.find((e:any)=>e.product?._id === id))  dispatch(setInBasket(true)) 
  if (compare?.compareItems.find((e:any)=>e.product?._id === id)) dispatch(setInCompare(true))
  if (loves?.lovesItems.find((e:any)=>e.product?._id === id))  dispatch(setInLoves(true))
      
          
} catch (error) {
  console.log(error);
} finally {
  dispatch(setProductLoad(true))
}
   

  


}



export const addRaitingToProduct = (id:string | undefined,raitingModal:number | null,sername:string,text:string,name:string)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user} = currentState.reducer.user

  try {
    addRaiting({user:user.id,rate:raitingModal,product:id,name,sername,text}).
    then(data=>"status" in data === false &&  window.location.reload())
  } catch (error) {
    console.log(error);
  }

}


export const addProduct = ()=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {setName,setDescription,setPrice,setFiles,setBrand,setType,setFileImages} = adminSlice.actions
  const {brand,type,typeInformationProduct,name,description,price,files} = currentState.reducer.admin
  try {
    let bool = true

    typeInformationProduct.forEach((el:any) => {
        if (Object.values(el)[0] === '') bool = false
        
    })


if (name !== '' && description !== '' && price!== '' && bool === true && '_id' in type && '_id' in brand && files.length > 1) {
    const formaData = new FormData()
    formaData.append('name',name)
    formaData.append('description',description)
    formaData.append('price',price)
    formaData.append('typeId',type._id)
    formaData.append('brandId',brand._id)
    formaData.append('information',JSON.stringify(typeInformationProduct))
    files.forEach((f:any)=> formaData.append('image',f))
   

createProduct(formaData).then(data=>{
    dispatch(setName(''))
    dispatch(setDescription(''))
    dispatch(setPrice(''))
   delete type._id
   delete brand._id
   dispatch(setFiles([]))
   dispatch(setBrand({name:'бренд'}))
   dispatch(setType({name:'тип'}))
   dispatch(setFileImages([]))
   window.location.replace(HOME_ROUTE);
   window.location.reload()
})
}else{
alert('недостаточно данных')
}
   
  } catch (error) {
    console.log(error);
  }

}



















