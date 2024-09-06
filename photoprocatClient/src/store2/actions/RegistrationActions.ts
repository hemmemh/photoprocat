
import jwtDecode from "jwt-decode";
import { changeUser, registration } from "../../https/userApi";
import { EMAIL_REGEXP, PASSWORD_REGEX } from "../../utils/config";
import { registrationSlice } from "../reducers/RegistrationSlice";
import { AppDispatch, store } from "../store";





export const onSetMail = (e:string)=>async (dispatch:AppDispatch) => {
  const {setMail,setValidationEmail} = registrationSlice.actions
  dispatch(setMail(e))
  
  if (!EMAIL_REGEXP.test(e) && e !=='' ) {
      dispatch(setValidationEmail(false))
     
    }else{
      dispatch(setValidationEmail(true))
    }

}


export const changePassword = (password:string)=>async (dispatch:AppDispatch) => {
  const {setPassword,setValidationPassword} = registrationSlice.actions
  dispatch( setPassword(password))
  

  if (!PASSWORD_REGEX.test(password) && password !=='' ) {
      dispatch(setValidationPassword(false))
  }else{
      dispatch(setValidationPassword(true))
  }

}


export const onRegistration= ()=>async (dispatch:AppDispatch) => {
  const {setLoader,setSuccessfullReg} = registrationSlice.actions
  const currentState = store.getState();
  const {secondName,name,mail,data,password,tell,validationEmail,validationPassword} = currentState.reducer.registration

try {
  if (validationEmail && validationPassword && mail !=='' && password !=='') {
    dispatch(setLoader(true))
    
    registration({mail,password}).then(response=>{
        const user = jwtDecode<any>(response.refreshToken)
        changeUser({id:user.id,name,serName:secondName,birthDate:data,tell}).then(data=>{
            dispatch(setSuccessfullReg(true))
            console.log(data,'1111');
        
            setTimeout(() => {
                dispatch(setSuccessfullReg(false))
            }, 3000);
        })
    
    }).finally(()=>{
        dispatch(setLoader(false))
    })
}else{
    alert('ошибка при регистрации')
}
} catch (error) {
  console.log(error);
}

}










