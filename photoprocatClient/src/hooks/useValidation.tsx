import React, { useState } from 'react'
import { EMAIL_REGEXP, PASSWORD_REGEX } from '../utils/config'
import { Login } from '../store2/actions/NavBarActions'

import { navbarSlice } from '../store2/reducers/NavBarSlice'
import { useAppDispatch, useAppSelector } from './reduxHooks'

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
    const {validationError,validationErrorText} = useAppSelector((state)=>state.reducer.navbar)
    const {setValidationErrorText,setValidationError} = navbarSlice.actions

    
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

return {validationEmail,validationPassword,onSetMail,changePassword,onLogin,validationError,validationErrorText}
}

export default useValidation