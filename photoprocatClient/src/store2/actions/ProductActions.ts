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



export const getAllInfo = (action:any[])=> async (dispatch:AppDispatch)=>
{
  const currentState = store.getState();
const {checkedBrands,products,limit,user,type} = currentState.reducer.catalog
const {setBrands,setBrandsLoad,setCheckedBrands,setProducts,setProductsLoad,setBasket,setCompare,setLoves,setTypeInformation,setInformations,setInformationValues,setsliderMouseOn,setPage,setPriceRange,setMinMaxPrice,setType,setGridLoader,setPriceValue} = catalogSlice.actions
  try {
    let typeInformationConst = {}
    let informationValuesConst = {}
    let informationsConst:any = []
    let slideMouseOneConst:any = {}
  
   
 
    getAllproduct(...action).then(data=>{
    

      
    
       dispatch(setProducts({...data}))
       dispatch(setType(data.type))
       let price:any = []
       data.responseForInformations.forEach((el:any)=>price.push(Number(el.price)))
       price = price.sort((a:any,b:any)=>a-b)
       dispatch(setMinMaxPrice([price[0],price[price.length-1]]))
       dispatch(setPriceRange([price[0],price[price.length-1]]))
       dispatch(setPriceValue([price[0],price[price.length-1]]))
       dispatch(setPage(action[1]))

       for (const it of JSON.parse(data.responseForInformations[0].type.informations)) {
        console.log(it,'ss');
        
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
          console.log('ity', it.information);
          
            informationsConst = [...informationsConst,...it.information]
        
       }
   
       dispatch(setInformations(informationsConst))
       
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
            console.log(arr,'********');
            
            informationValuesConst = {...informationValuesConst,[typeName]:arr[0]} 
        }
       })
  
       dispatch(setsliderMouseOn(slideMouseOneConst))
       console.log('obj',informationValuesConst, action[9], Object.keys(JSON.parse(action[9])));
       const newInformationValuesConst = Object.keys(JSON.parse(action[9]))
       if (newInformationValuesConst.length !== 0) {
        dispatch(setInformationValues(JSON.parse(action[9])))
       }else{
        dispatch(setInformationValues(informationValuesConst))
       }

       dispatch(setTypeInformation(typeInformationConst))
       dispatch( setProductsLoad(true))
     
    })

    if (user.id !== '') {
      getBasket({id:user.id}).then(data=>{
        dispatch(setBasket(data?.basketItems))     
    })
    getCompare({id:user.compare}).then(data=>{
      dispatch(setCompare(data?.compareItems))
  })

  const loves = await getLoves({id:user.loves})
  dispatch(setLoves(loves?.lovesItems))
  dispatch( setProductsLoad(true))
    }
 


    getAllBrands().then(data=>{
        dispatch(setBrands(data))
        dispatch(setBrandsLoad(true))
    })

    
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
    console.log('action', action);
    

const {checkedBrands,products,limit,user,type} = currentState.reducer.catalog
const {setBrands,setBrandsLoad,setCheckedBrands,setProducts,setProductsLoad,setBasket,setCompare,setLoves,setTypeInformation,setInformations,setInformationValues,setsliderMouseOn,setPage,setPriceRange,setMinMaxPrice,setType,setGridLoader,setPriceValue} = catalogSlice.actions
dispatch(setProductsLoad(true))
dispatch(setPage(action[1]))
getAllproduct(...action).then(data=>{
   console.log('%%%yGG', type?._id, data.type._id);
   
  if(type?._id !== data.type._id){
    let price:any = []
    let typeInformationConst = {}
    let informationValuesConst = {}
    let informationsConst:any = []
    let slideMouseOneConst:any = {}
  
       data.responseForInformations.forEach((el:any)=>price.push(Number(el.price)))
       price = price.sort((a:any,b:any)=>a-b)
       dispatch(setMinMaxPrice([price[0],price[price.length-1]]))
       dispatch(setPriceRange([price[0],price[price.length-1]]))
       dispatch(setPriceValue([price[0],price[price.length-1]]))

       for (const it of JSON.parse(data.responseForInformations[0].type.informations)) {
        console.log(it,'ss');
        
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
          console.log('ity', it.information);
          
            informationsConst = [...informationsConst,...it.information]
        
       }
   
       dispatch(setInformations(informationsConst))
       
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
            console.log(arr,'********');
            
            informationValuesConst = {...informationValuesConst,[typeName]:arr[0]} 
        }
       })
  
       dispatch(setsliderMouseOn(slideMouseOneConst))
       console.log('obj',informationValuesConst, action[9], Object.keys(JSON.parse(action[9])));
       const newInformationValuesConst = Object.keys(JSON.parse(action[9]))
       if (newInformationValuesConst.length !== 0) {
        dispatch(setInformationValues(JSON.parse(action[9])))
       }else{
        dispatch(setInformationValues(informationValuesConst))
       }

       dispatch(setTypeInformation(typeInformationConst))
       dispatch( setProductsLoad(true))
     
    }
  
   dispatch( setProducts({...data}))
   dispatch( setType(data.type))
   dispatch(setProductsLoad(true))
})
  } catch (error) {
    
  }

}

export const setPage = (page:number)=>async (dispatch:AppDispatch) => {
  try {  
const {setPage} = catalogSlice.actions
     dispatch(setPage(page))
  } catch (error) {
    
  }

}

export const updateProducts = (action:any[])=>async (dispatch:AppDispatch) => {
  try {
    const currentState = store.getState();
    const {priceValue,checkedBrands,products,page,limit,priceRange,minMaxPrice,user} = currentState.reducer.catalog
    const {setProducts,setPage,setGridLoader,} = catalogSlice.actions
    dispatch(setGridLoader(true))
    getAllproduct(...action).then(data=>{

        dispatch(setPage(+action[1]))
        dispatch( setProducts({count:products.count,responce:[...data.responce],responceAll:products.responceAll, responseForInformations:[...data.responseForInformations],type:data.type}))
        dispatch(setGridLoader(false))
   })
  } catch (error) {
    console.log(error);
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
    let price:any = []
    let typeInformationConst = {}
    let informationValuesConst = {}
    let informationsConst:any = []
    let slideMouseOneConst:any = {}
    const currentState = store.getState();
    const {checkedBrands,products,limit,user,type} = currentState.reducer.catalog
    const {setBrands,setBrandsLoad,setCheckedBrands,setProducts,setProductsLoad,setBasket,setCompare,setLoves,setTypeInformation,setInformations,setInformationValues,setsliderMouseOn,setPage,setPriceRange,setMinMaxPrice,setType,setGridLoader,setPriceValue} = catalogSlice.actions
       data.responseForInformations.forEach((el:any)=>price.push(Number(el.price)))
       price = price.sort((a:any,b:any)=>a-b)
       dispatch(setMinMaxPrice([price[0],price[price.length-1]]))
       dispatch(setPriceRange([price[0],price[price.length-1]]))
       dispatch(setPriceValue([price[0],price[price.length-1]]))

       for (const it of JSON.parse(data.responseForInformations[0].type.informations)) {
        console.log(it,'ss');
        
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
          console.log('ity', it.information);
          
            informationsConst = [...informationsConst,...it.information]
        
       }
   
       dispatch(setInformations(informationsConst))
       
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
            console.log(arr,'********');
            
            informationValuesConst = {...informationValuesConst,[typeName]:arr[0]} 
        }
       })
  
       dispatch(setsliderMouseOn(slideMouseOneConst))
       console.log('obj',informationValuesConst, action[9], Object.keys(JSON.parse(action[9])));
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

export const getProduct = (id:string | undefined)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user} = currentState.reducer.catalog
  const {setBasket,setCompare,setLoves} = catalogSlice.actions
  const {setInCompare,setInLoves,setInBasket,setProduct,setRaiting,setProductLoad} = productSlice.actions
  dispatch(setInBasket(false)) 
  dispatch(setInLoves(false)) 
  dispatch(setInCompare(false)) 
  
try {


  const prod = await getOneproduct({id})
  dispatch(setProduct(prod))
  dispatch( setRaiting((prod.ratings.reduce((accumulator:any, currentValue:any)=>accumulator + currentValue.rate,0))/prod.ratings.length))

  const bask = await getBasket({id:user.id})


  if (  bask?.basketItems.find((e:any)=>e.product?._id === id))  dispatch(setInBasket(true)) 

  dispatch(setBasket(bask.basketItems))
           
  const comp = await getCompare({id:user.compare})

      if (comp?.compareItems.find((e:any)=>e.product?._id === id)) dispatch(setInCompare(true))
          
          dispatch(setCompare(comp.compareItems))
      
 
const love = await getLoves({id:user.loves})

      dispatch(setLoves(love.lovesItems))

      if (love?.lovesItems.find((e:any)=>e.product?._id === id))  dispatch(setInLoves(true))
      
          


} catch (error) {
  console.log(error);
} finally {
  dispatch(setProductLoad(true))
}
   

  


}


export const addToCompare = (id:string | undefined)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const navbar = currentState.reducer.navbar
  const {loaders,inCompare} = currentState.reducer.product
  const {user,compare} = currentState.reducer.catalog
  const {setInCompare,setLoaders} = productSlice.actions
  const {setCompare} = navbarSlice.actions
  const element = document.querySelector('.Navbar__loader')
  try {
    if (!user.id) {
      if (!element?.classList.contains('active')) {
        element?.classList.add('active')
          setTimeout(() => {
            element?.classList.remove('active')
          }, 1000);
        }
        return
    }
    
    if(loaders.compare){
      if (!inCompare) {
          dispatch(setLoaders({...loaders,compare:false}) )
          
          addItemToCompare({compareId:user.compare,product:id}).
          then(data=>{
              dispatch(setCompare(navbar.compare + 1))
              dispatch(setInCompare(true))}).finally(()=>{
                  dispatch(setLoaders({...loaders,compare:true}))
                  
                })
      }else{
          dispatch(setLoaders({...loaders,compare:false}))
          console.log(compare.find((el:any)=>el.product._id=== id)?._id,user.compare);
          removeItemFromCompare({id:id,compareId:user.compare}).
          then(data=>{
              dispatch(setCompare(navbar.compare - 1))
              dispatch(setInCompare(false))
              }).finally(()=>{
                  dispatch(setLoaders({...loaders,compare:true}) )
                })
      }
    }
  } catch (error) {
    console.log(error);
  }

}



export const addToLoves = (id:string | undefined)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const navbar = currentState.reducer.navbar
  const {loaders,inCompare,inLoves} = currentState.reducer.product
  const {user,compare,loves} = currentState.reducer.catalog
  const {setInCompare,setLoaders,setInLoves} = productSlice.actions
  const {setCompare} = navbarSlice.actions
  const element = document.querySelector('.Navbar__loader')
  try {
    if (!user.id) {

        if (!element?.classList.contains('active')) {
          element?.classList.add('active')
            setTimeout(() => {
              element?.classList.remove('active')
            }, 1000);
          }
          return
      }
      if(loaders.love){
        if (!inLoves) {
            dispatch(setLoaders({...loaders,love:false}) )
        addProductInLoves({lovesId:user.loves,product:id}).then(data=>dispatch(setInLoves(true))).finally(()=>{
            dispatch(setLoaders({...loaders,love:true}) )
          })
    }else{
        dispatch(setLoaders({...loaders,love:false}) )
        removeProductFromLoves({id:id,lovesId:user.loves}).
        then(data=>
          dispatch(setInLoves(false))
          
          ).finally(()=>{
            dispatch(setLoaders({...loaders,love:true}) )
          })
    }
      }
  } catch (error) {
    console.log(error);
  }

}


export const addToBasket = (id:string | undefined)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const navbar = currentState.reducer.navbar
  const {loaders,inBasket} = currentState.reducer.product
  const {user,basket} = currentState.reducer.catalog
  const {setLoaders,setInBasket} = productSlice.actions
  const {setProducts} = navbarSlice.actions
  const element = document.querySelector('.Navbar__loader')
  try {
    if (!user.id) {
      if (!element?.classList.contains('active')) {
        element?.classList.add('active')
          setTimeout(() => {
            element?.classList.remove('active')
          }, 1000);
        }
        return
    }

    if(loaders.basket){
      if (!inBasket) {    
          dispatch(setLoaders({...loaders,basket:false}) )
          
          addItemToBasket({basketId:user.basket,product:id,count:1}).
          then(data=>{
              dispatch(setLoaders({...loaders,basket:false}) )
              dispatch(setProducts(navbar.products + 1))
              dispatch(setInBasket(true))
              }).finally(()=>{
                  dispatch(setLoaders({...loaders,basket:true}) )
                })
         
      }else{
          dispatch(setLoaders({...loaders,basket:false}) )
          console.log(basket,'[p',basket.find((el:any)=>el.product._id === id)?._id);
          
          removeItemFromBasket({id:basket.find((el:any)=>el.product._id === id)?.product._id,basketId:user.basket}).
          then(data=>{
            console.log(data,'iu');
            
              dispatch(setProducts(navbar.products - 1))
              dispatch(setInBasket(false))}).finally(()=>{
                  dispatch(setLoaders({...loaders,basket:true}) )
                })
        
      }
    }
  } catch (error) {
    console.log(error);
  }

}


export const addRaitingToProduct = (id:string | undefined,raitingModal:number | null,sername:string,text:string,name:string)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const navbar = currentState.reducer.navbar
  const {loaders,inBasket} = currentState.reducer.product
  const {user,basket} = currentState.reducer.catalog
  const {setLoaders,setInBasket} = productSlice.actions
  const {setProducts} = navbarSlice.actions
  try {
    addRaiting({user:user.id,rate:raitingModal,product:id,name,sername,text}).
    then(data=>"status" in data === false &&  window.location.reload())
  } catch (error) {
    console.log(error);
  }

}


export const refreshUser = ()=>async (dispatch:AppDispatch) => {
  const {setUser} = catalogSlice.actions
  const {setProducts,setCompare} = navbarSlice.actions
  try {
  const data = await refresh()
  const user:any = jwtDecode(data.refreshToken)
  dispatch(setUser(user))
  const basket = await getBasket({id:user.id})
  dispatch(setProducts(basket.basketItems.length))
  const compare = await getCompare({id:user.compare})
  dispatch(setCompare(compare.compareItems.length) )
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



















