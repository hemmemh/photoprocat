import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/navigation";
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { putProducts } from '../model/HomeActions';
import SpinnerBody from '../../UI/spinnerBody/SpinnerBody';
import cls from './slidesHome.module.scss'
import ProductItem from '../../productItem/ProductItem';

const navigation ={
  prevEl: '.slidesHome__prevButton',
  nextEl: '.slidesHome__nextButton',
}

const breakpoints = {
  
  479.98: {
    slidesPerView: 2.4,
    spaceBetween: 30,
    
  },
  550: {
    slidesPerView: 3.2,
    spaceBetween: 15,
    
  },


}
export const SlidesHome = () => {

      const [loader, setloader] = useState<boolean>(false)
      const dispatch = useAppDispatch()
      const {compare,loves,basket,products} = useAppSelector(state=>state.reducer.catalog)


      useEffect(() => {
        dispatch(putProducts()).then(()=>{
          setloader(true)
        })
      }, [])


 


  return (
    <div   className={cls.slidesHome}>
    <div className="__container">
    <div className={cls.header}>Популярные товары</div>
    {loader ?
    <div className={cls.sliderCover}>
        <Swiper
        className='HomeSlider'
        modules={[Navigation]}
        navigation={navigation}
        breakpoints={breakpoints}     
        spaceBetween={10}
        slidesPerView={1.4}
>
 
 { products.responce.map((ell:any)=>
  <SwiperSlide key={ell._id}>
     <ProductItem 
          key={ell._id} 
          data={ell} 
          basket={basket} 
          loves={loves} 
          compare={compare} 
          inCompare = {compare?.find((el:any)=>el.product?._id == ell._id) ? true : false} 
          inBasket = {basket?.find((el:any)=>el.product?._id == ell._id)  ? true : false} 
          inLoves = {loves?.find((el:any)=>el.product?._id == ell._id)  ? true : false}/>
</SwiperSlide>
)}

  </Swiper>
    </div>:
    <SpinnerBody className='homeSpinner'/>
  }
  </div>
   </div>
  )
}

