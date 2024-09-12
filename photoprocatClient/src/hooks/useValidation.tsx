import React, { useState } from 'react'
import { EMAIL_REGEXP, PASSWORD_REGEX } from '../utils/config'


import { navbarSlice } from '../store2/reducers/NavBarSlice'
import { useAppDispatch, useAppSelector } from './reduxHooks'
import { useNavigate } from 'react-router-dom'
import { REGISTRATION_ROUTE } from '../app/config/routs'
import { Login } from '../store2/actions/UserActions'

type useValidationType = {
    setmail:React.Dispatch<React.SetStateAction<string>>
    setpassword:React.Dispatch<React.SetStateAction<string>>
    mail:string
    password:string
}

const useValidation = ({setmail,setpassword,mail,password}:useValidationType) => {
    const [validationEmail, setvalidationEmail] = useState<boolean>(true)
    const [validationPassword, setvalidationPassword] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {validationError,validationErrorText} = useAppSelector((state)=>state.reducer.navbar)
    const {setValidationErrorText,setValidationError, setLoginModal} = navbarSlice.actions

    
    const onSetMail = (e:any)=>{
        setmail(e)
        if (!EMAIL_REGEXP.test(e) && e !=='' ) {
            setvalidationEmail(false)
          }else{
            setvalidationEmail(true)
          }
    }

    const changePassword = (password:any)=>{
        setpassword(password)
        if (!PASSWORD_REGEX.test(password) && password !=='' ) {
          setvalidationPassword(false)
        }else{
          setvalidationPassword(true)
        }
    }

    const onLogin = ()=>{
        if (validationPassword && validationEmail) {
             dispatch(Login({mail,password}))
        }else{
            if (!validationEmail) {
                !validationErrorText.includes('mail') && setValidationErrorText([...validationErrorText,'mail'])
            }
            if (!validationPassword) {
                !validationErrorText.includes('password') && setValidationErrorText([...validationErrorText,'password'])
            }
            setValidationError(true)
        }
      
    }
    const onRegistration = ()=>{
       dispatch(setLoginModal(false))
       navigate(REGISTRATION_ROUTE)
    }

return {validationEmail,validationPassword,onSetMail,changePassword,onLogin,onRegistration,validationError,validationErrorText}
}

export default useValidation