import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, NEWS_ROUTE } from '../../../../app/config/routs'


export const NavigationNavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="Navbar__navigation navigationNavbar">
    <div  onClick={()=>navigate('*')} className="navigationNavbar__item">О компании</div>
    <div  onClick={()=>navigate('*')} className="navigationNavbar__item">Правила</div>
    <div onClick={()=>navigate(NEWS_ROUTE)} className="navigationNavbar__item">Новости</div>
    <div onClick={()=>navigate('*')} className="navigationNavbar__item">Контакты</div>
    <div onClick={()=>navigate(ADMIN_ROUTE)} className="navigationNavbar__item">Админ</div>
    
</div>
  )
}

