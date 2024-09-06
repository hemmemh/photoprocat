import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/reduxHooks'
import { BASKET_ROUTE, COMPARE_ROUTE, LOVES_ROUTE } from '../../../../app/config/routs'
import {memo} from 'react'

const ActionsNavBar = () => {
    const navigate = useNavigate()
    const navbar = useAppSelector((state)=>state.reducer.navbar)
  return (
    <div className="menu__actions actionsMenu">
    <div onClick={()=>navigate(LOVES_ROUTE)} className="actionsMenu__action _icon-star"></div>
    <div onClick={()=>navigate(COMPARE_ROUTE)} className="actionsMenu__action _icon-compare">{navbar.compare !== 0 && <span className='actionsMenu__span _compare'>{navbar.compare}</span> }</div>
    <div onClick={()=>navigate(BASKET_ROUTE)} className="actionsMenu__action _icon-cart">{navbar.products !== 0 &&<span className='actionsMenu__span _product'>{navbar.products}</span>}</div>
</div>
  )
}

export  default memo(ActionsNavBar)
