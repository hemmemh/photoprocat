
import jwtDecode from "jwt-decode";
import { login } from "../../https/userApi";
import { HOME_ROUTE } from "../../app/config/routs";
import { catalogSlice } from "../reducers/CatalogSlice";
import { navbarSlice } from "../reducers/NavBarSlice";
import { AppDispatch, store } from "../store";


type Login = {
  mail:string
  password:string

}


export const Login = ({mail,password}:Login)=>async (dispatch:AppDispatch) => {
  const {setUser} = catalogSlice.actions
  const {setLoginModal} = navbarSlice.actions
  try {

      login({mail,password}).then(e=>{
          console.log(jwtDecode(e.refreshToken));
          dispatch(setUser(jwtDecode(e.refreshToken)))
          dispatch(setLoginModal(false))
      }).then(data=>{
          window.location.replace(HOME_ROUTE);
          window.location.reload()
         }).catch(e=>{
          alert('неверен логин или пароль')
      })

  } catch (error) {
    console.log(error);
  }

}















