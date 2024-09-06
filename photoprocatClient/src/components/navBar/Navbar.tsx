import {useRef,FC,memo } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import useBodyFixed from '../../hooks/useBodyFixed'

import { LoginNavBar } from './loginNavBar/LoginNavBar'
import useScroll from '../../hooks/useScroll'
import Loader from '../UI/loader/Loader'
import './navbar.scss'
import BodyNavBar from './bodyNavBar/BodyNavBar'




 const Navbar:FC = () => {
    const {loader,passSucc,menu} = useAppSelector((state)=>state.reducer.navbar)
    const navbarRef = useRef<HTMLDivElement>(null)
    const loaderRef = useRef<HTMLDivElement>(null)
    const {scroll} = useScroll(navbarRef)
    useBodyFixed(menu)


  return (
    <div ref={navbarRef} className={scroll ? "Navbar active" : "Navbar"}>
            <BodyNavBar/>
            <LoginNavBar/>
            <div ref={loaderRef} className="Navbar__loader">Войдите в аккаунт</div>
            {passSucc && <div className="Registration__successfullReg">пароль успешно изменен</div>}
            {loader && <div className="Registration__loader"><Loader/></div>}
    </div>
  )
}

export default memo(Navbar)
