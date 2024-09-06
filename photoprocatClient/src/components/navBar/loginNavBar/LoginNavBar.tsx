import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks"

import { navbarSlice } from "../../../store2/reducers/NavBarSlice"
import { Modal } from "../../UI/modal/Modal"
import { ChangePass } from "./changePass/ChangePass"
import { Login } from "./login/Login"
import { SetEmail } from "./setEmail/SetEmail"



export const LoginNavBar = () => {
    const {loginModal,validationError,validationErrorText} = useAppSelector((state)=>state.reducer.navbar)
    const {setLoginModal} = navbarSlice.actions

    const dispatch = useAppDispatch()

  return (
    <Modal modalClass='login' active={loginModal} setActive={(e:boolean)=>dispatch(setLoginModal(e))}>

    <Login/>
    <SetEmail/>
    <ChangePass/>
    {validationError && 
    <div className="login-modal__error">
    {`Ошибка в написании ${validationErrorText.join(', ')}` }
    </div>}
    
</Modal>
  )
}

