import React, { useEffect } from 'react'
import { Controller } from 'swiper'
import { compareSlice } from '../../../../../store2/reducers/CompareSlice'
import { Swiper, SwiperSlide } from 'swiper/react'
import { API_URL } from '../../../../../utils/config'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks'
import './topSlider.scss'
import { ICompareItem } from '../../../../../utils/interfaces'
import { removeItemFromCompare } from '../../../../../https/compareApi'
import { removeFromCompare } from '../../../../../store2/actions/CompareActions'


const breakpoints ={
  786: {
  
  
      spaceBetween: 55,
      slidesPerView:3
    },
  982: {
  
      spaceBetween: 50,
      slidesPerView:4
    },
  1213: {
      slidesPerView:4,
    spaceBetween: 118,
    
  },
  
  }
const TopSlider = ({setFirstSwiper,secondSwiper}:{setFirstSwiper:(a:any)=>void,secondSwiper:any}) => {
    const {activeType, compare} = useAppSelector(state=>state.reducer.compare)



    const dispatch = useAppDispatch()
    useEffect(() => {
       console.log('compare', compare);
       
    }, [])
    

  return (
    <div className="main-compare__top-slider">
        <div className="main-compare__top-slider-cover">
                  
    <Swiper
slidesPerView={2}
spaceBetween={0}
className="swiperCompare"
modules={[Controller]}
onSwiper={(e)=>setFirstSwiper(e)}

controller={{ control: secondSwiper }}
breakpoints={breakpoints}   
>
{compare?.compareItems.map((el:ICompareItem)=>{
if(el.product.type.name === activeType){
    return ( <SwiperSlide key={el._id}>
        <div className="swiperCompare__item item-swiperCompare">
             <div className="item-swiperCompare__image-cover">
                 <div className="item-swiperCompare__image">
                 <img src={`${API_URL}/${el.product.name}/${JSON.parse(el.product.images)[0]}`} alt=""/>
                 </div>
             </div>
             <div onClick={()=>dispatch(removeFromCompare(el.product._id))} className="item-swiperCompare__delete"></div>
             <div className="item-swiperCompare__name">{el.product.name}</div>
             <div className="item-swiperCompare__brand">{el.product.brand.name}</div>
        </div>
        </SwiperSlide>)
}

}
)}
    </Swiper>
        </div>
    </div> 
  )
}

export default TopSlider