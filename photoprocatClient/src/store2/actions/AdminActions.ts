import { adminSlice } from "../reducers/AdminSlice";
import { AppDispatch, store } from "../store";




export const addtypeInformationProduct = (e:any)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {sliders} = currentState.reducer.admin
  const {setTypeInformationProduct,setType,setSliders} = adminSlice.actions
  let a:any = []

  JSON.parse(e.informations).forEach((el:any)=>{
      switch(Object.values(el)[0]){
          case 'radio':a = [...a,{[Object.keys(el)[0]]:''}]
          return
          case 'check':a = [...a,{[Object.keys(el)[0]]:''}]
          return
          case 'slider':{
            dispatch(setSliders([...sliders,Object.keys(el)[0]]))
              a = [...a,{[Object.keys(el)[0]]:'1'}]
          }
      }
  }
      )
      dispatch(setTypeInformationProduct(a))
      dispatch(setType(e))
}



export const setInformationProductf = (e:any,el:any)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {sliders,typeInformationProduct} = currentState.reducer.admin
  const {setTypeInformationProduct,setType,setSliders} = adminSlice.actions

  dispatch(setTypeInformationProduct([...typeInformationProduct.map((m:any)=>{
    if (Object.keys(m)[0] == el) {
        if (sliders.includes(Object.keys(m)[0])) {
            if (parseInt(e) == Number(e) || e == '' ) {
                return {[Object.keys(m)[0]]:e}
            }else{
                return m
            }
        }else{
            return {[Object.keys(m)[0]]:e}
        }
       
    }
    else{
        return m
    }
})]))
}



export const fileload = (e:any)=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {files,fileImages} = currentState.reducer.admin
  const {setFileImages,setFiles} = adminSlice.actions

  let reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  dispatch(setFiles([...files,e.target.files[0]]))
  
  reader.onloadend = ()=>{
      dispatch(setFileImages([...fileImages,reader.result]))
  
  }

}


















