import { useState } from 'react'

import { catalogSlice } from '../../../../../../store2/reducers/CatalogSlice'
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/reduxHooks'
import Toggle from '../../../../../UI/toggle/Toggle'
import ProductSpoiler from '../../../../../UI/productSpoiler/ProductSpoiler'
import Button from '../../../../../UI/button/Button'
import Radio from '../../../../../UI/radio/Radio'
import Button2 from '../../../../../UI/button2/Button2'
import cls from './optionsSort.module.scss'


const sorts = [{'purchaseNumber':'По популярности'},{'price':'По цене'},{'rating':'По рейтингу'},{'date':'По дате'}]

const OptionsSort = () => {
    const [toggle, settoggle] = useState(false)
    const dispatch = useAppDispatch()
    const {setSort} = catalogSlice.actions
    const {sort} = useAppSelector((state)=>state.reducer.catalog)

    
  return (
    <div className="sort-main-catalog__options">
      <div className="sort-main-catalog__desktop">
        {sorts.map(item=> 
        <Radio 
        key={Object.keys(item)[0]}
           value={sort} 
           id={Object.keys(item)[0]} 
           name='sorts' 
           setValue={()=>dispatch(setSort(Object.keys(item)[0]))}>
            <Button2  className='sortButton'>{Object.values(item)[0]}</Button2>
        </Radio>)}
       
      </div>
      

    <ProductSpoiler   className="sort-main-catalog__mobile" >
    <Button2  className='sortButton _d'>Сортировать по</Button2>
      <div >
      {sorts.map(item=> 
        <Radio 
          key={`${Object.keys(item)[0]} spoiler`}
           value={sort} 
           id={Object.keys(item)[0]} 
           name='sorts' 
           setValue={()=>dispatch(setSort(Object.keys(item)[0]))}>
            <Button2  className='sortButton _d'>{Object.values(item)[0]}</Button2>
        </Radio>)}
      </div>
      
    </ProductSpoiler>
    </div>
  )
}

export default OptionsSort