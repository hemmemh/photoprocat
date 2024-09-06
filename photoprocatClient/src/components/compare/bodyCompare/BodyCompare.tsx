import React, { useState } from 'react'
import TopCompare from './topCompare/TopCompare'
import BottomCompare from './bottomCompare/BottomCompare'
import ButtonComapre from './buttonComapre/ButtonComapre'
import ItemsCompare from './itemsCompare/ItemsCompare'
import { useAppSelector } from '../../../hooks/reduxHooks'
import './BodyCompare.scss'
const BodyCompare = () => {
    const {user,compare} = useAppSelector(state=>state.reducer.catalog)
    const [firstSwiper, setFirstSwiper] = useState(null)
    const [secondSwiper, setSecondSwiper] = useState(null)
  return (
    <div className="Compare__topic">
    <div className="Compare__title">СРАВНИТЬ <span>{compare.length} ТОВАРОВ</span></div>
    <ItemsCompare/>
    <div className="Compare__main main-compare">
        <TopCompare   setFirstSwiper={setFirstSwiper} secondSwiper={secondSwiper}/>
        <BottomCompare setSecondSwiper ={setSecondSwiper} firstSwiper={firstSwiper}/>
        <ButtonComapre/>
    </div>
    </div>
  )
}

export default BodyCompare