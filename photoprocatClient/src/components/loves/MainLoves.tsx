import React, { useContext, useEffect, useState } from 'react'

import Navigation from '../UI/navigation/Navigation'


import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import './loves.scss'
import SpinnerBody from '../UI/spinnerBody/SpinnerBody'
import ProductItem from '../productItem/ProductItem'
const MainLoves = () => {
    const {loves, load} = useAppSelector(state=>state.reducer.love)
    const {compare} = useAppSelector(state=>state.reducer.compare)
    const {basket} = useAppSelector(state=>state.reducer.basket)

  return (
    <div className="Loves">
    <div className="Loves__container">
        <div className="Loves__body">
        <Navigation navigationClass='news'>Главная/Избранное</Navigation>
        {load ?
        <SpinnerBody/>:
           <div className="Loves__grid">
           {loves?.lovesItems.map((e:any)=>
           <ProductItem 
              key={e.product._id} 
              data={e.product} 
              inCompare = {compare?.compareItems.find((el:any)=>el.product?._id == e.product?._id) ? true : false} 
              inBasket = {basket?.basketItems.find((el:any)=>el.product?._id == e?._id)  ? true : false}  
              inLoves = {loves.lovesItems.find((el:any)=>el.product?._id == e.product?._id)  ? true : false}
              className='catalogItem'
              />)}
           </div>
        }
        </div>
    </div>
  </div>
  )
}

export default MainLoves