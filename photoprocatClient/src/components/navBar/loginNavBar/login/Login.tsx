import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { navbarSlice } from '../../../../store2/reducers/NavBarSlice'
import useValidation from '../../../../hooks/useValidation'
import Input from '../../../UI/input/Input'
import { REGISTRATION_ROUTE } from '../../../../app/config/routs'
import Button from '../../../UI/button/Button'





export  const Login = () => {
    const [mail, setmail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const navigate = useNavigate()
    const [code, setcode] = useState<string>('')
    const {loginModal,modalStage} = useAppSelector((state)=>state.reducer.navbar)
    const {setModalStage} = navbarSlice.actions
    const dispatch = useAppDispatch()
    const {validationEmail,validationPassword,changePassword,onSetMail,onLogin} = useValidation({setmail,setpassword,mail,password})
    useEffect(() => {
        if (loginModal === false) {
            dispatch(setModalStage(0))
            setmail('')
            setpassword('')
            setcode('')
        }else{
            setmail('')
            setpassword('')
            setcode('')
        }
       }, [loginModal])

  return (
    <div className={modalStage===0 ? "login-modal__body active" : "login-modal__body"}>
        <div className="login-modal__title">Войдите в свой аккаунт</div>
        <div className="login-modal__google"></div>
        <div className="login-modal__inputs">  
            <Input value={mail} change={onSetMail} inputClass={validationEmail ? 'registration tr' : "registration tr act"} placeholder='Логин'/>
            <Input value={password} change={changePassword} inputClass={validationPassword ? 'registration tr' : "registration tr act"} placeholder='Пароль'/>
        </div>
 
        <div onClick={()=>dispatch(setModalStage(1)) } className="login-modal__pass">Вспомнить пароль?</div>

        <div className="login-modal__buttons">
            <Button onClick={onLogin} className='login-modal g'>Войти</Button>
            <Button onClick={()=>navigate(REGISTRATION_ROUTE)} className='reg-modal g' >Регистрация</Button>
        </div>
    </div>
  )
}

