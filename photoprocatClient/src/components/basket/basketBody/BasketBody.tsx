import { useEffect } from 'react'
import TopicBasket from './topicBasket/TopicBasket'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'

import SpinnerBody from '../../UI/spinnerBody/SpinnerBody'



export const BasketBody = () => {
const {basket,load} = useAppSelector(state=>state.reducer.basket)
const dispatch = useAppDispatch()


    useEffect(() => {
        
}, [])




    
  return (
    <>
    {load ?
    <SpinnerBody/>
    : ( basket && basket.basketItems.length !== 0 )?
    <TopicBasket/>
    :  <div className="Basket__none _icon-cart">нет товаров</div>
     
     }</>
  )
}

