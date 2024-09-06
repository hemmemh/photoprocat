import { useNavigate } from 'react-router-dom'
import useCheckMobileScreen from '../../../../hooks/DetectMobileHook'
import { HOME_ROUTE } from '../../../../app/config/routs'
import {memo} from 'react'

export const Logo = () => {
    const navigate = useNavigate()
    const isMobile = useCheckMobileScreen(767.98)
  return (
    <div  className="Navbar__logo">
    <div onClick={()=>navigate(HOME_ROUTE)} className="Navbar__image">
        {isMobile 
        ?
        <img src={require("../../../../images/navbar/logo-mobile.png")} alt=""/>
        :
        <img src={require("../../../../images/navbar/logo.png")} alt=""/>
    }
    
    </div>
    
  
</div>
  )
}

export  default memo(Logo)