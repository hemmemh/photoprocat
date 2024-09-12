import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/reduxHooks'
import { BASKET_ROUTE, COMPARE_ROUTE, LOVES_ROUTE } from '../../../../app/config/routs'
import {memo} from 'react'

const ActionsNavBar = () => {
    const navigate = useNavigate()
    const compare = useAppSelector((state)=>state.reducer.compare.compare)
    const basket = useAppSelector((state)=>state.reducer.basket.basket)
  return (
    <div className="menu__actions actionsMenu">
    <div onClick={()=>navigate(LOVES_ROUTE)} className="actionsMenu__action _icon-star"></div>
    <div onClick={()=>navigate(COMPARE_ROUTE)} className="actionsMenu__action _icon-compare">{compare?.compareItems.length !== 0 && <span className='actionsMenu__span _compare'>{compare?.compareItems.length}</span> }</div>
    <div onClick={()=>navigate(BASKET_ROUTE)} className="actionsMenu__action _icon-cart">{basket?.basketItems.length !== 0 &&<span className='actionsMenu__span _product'>{basket?.basketItems.length}</span>}</div>
</div>
  )
}

export  default memo(ActionsNavBar)
