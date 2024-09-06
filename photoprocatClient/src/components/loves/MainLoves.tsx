import React, { useContext, useEffect, useState } from 'react'

import Navigation from '../UI/navigation/Navigation'

import { putLoves } from '../../store2/actions/LovesActions'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import './loves.scss'
import SpinnerBody from '../UI/spinnerBody/SpinnerBody'
import ProductItem from '../productItem/ProductItem'
const MainLoves = () => {
    const {compare,loves,basket} = useAppSelector(state=>state.reducer.catalog)
    const {load} = useAppSelector(state=>state.reducer.love)

    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(putLoves())
    }, [])

  return (
    <div className="Loves">
    <div className="Loves__container">
        <div className="Loves__body">
        <Navigation navigationClass='news'>Главная/Избранное</Navigation>
        {load ?
        <SpinnerBody/>:
           <div className="Loves__grid">
           {loves?.map((e:any)=>
           <ProductItem 
              basket={basket} 
              loves={loves} 
              compare={compare} 
              key={e.product._id} 
              data={e.product} 
              inCompare = {compare.find((el:any)=>el.product?._id == e.product?._id) ? true : false} 
              inBasket = {basket.find((el:any)=>el.product?._id == e?._id)  ? true : false}  
              inLoves = {loves.find((el:any)=>el.product?._id == e.product?._id)  ? true : false}
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