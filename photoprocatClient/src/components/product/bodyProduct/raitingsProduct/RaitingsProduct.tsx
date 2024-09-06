import React from 'react'
import Button from '../../../UI/button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Rating } from '@mui/material'
import { productSlice } from '../../../../store2/reducers/ProductSlice'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import './ratingsProduct.scss'
import Button2 from '../../../UI/button2/Button2'

const breakpoints = {
  500: {
      slidesPerView: 1.8,
      spaceBetween: 10,
      
    },
  700: {
      slidesPerView: 2.8,
      spaceBetween: 10,
      
    },
  991.98: {
    slidesPerView: 3.8,
    spaceBetween: 20,
    
  },

}
const RaitingsProduct = () => {
  const {product} = useAppSelector((state)=>state.reducer.product)
  const dispatch = useAppDispatch()
  const {setModal} = productSlice.actions

  
  return (
    <div className="Product__raitings raitings-product">
      <div className="raitings-product__title">Отзывы</div>
      
    <div className="raitings-product__button">
        <Button2 onClick={()=>dispatch(setModal(true))} className='buttonCart'>Написать отзыв</Button2>
    </div>
    <div className="raitings-product__body">
        <Swiper
        spaceBetween={20}
        slidesPerView={1}
        freeMode={true}
        breakpoints={breakpoints}  
        >
            {product?.ratings.map((el:any)=>
             <SwiperSlide>
             <div className="raitings-product__item-cover">
                <div className="raitings-product__item item-raitings">
                     <div className="item-raitings__name">{el.name} {el.sername}</div>
                     <div className="item-raitings__raiting"><Rating readOnly value={el.rate}/></div>
                     <div className="item-raitings__text">{el.text}</div>
                </div>
             </div>
             </SwiperSlide>
         )}
           
      
        </Swiper>
       
        
    </div>
    
   </div>
  )
}

export default RaitingsProduct