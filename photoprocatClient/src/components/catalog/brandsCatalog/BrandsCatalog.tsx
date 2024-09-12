
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { API_URL } from '../../../utils/config'
import ProductSpoiler from '../../UI/productSpoiler/ProductSpoiler'
import './brandsCatalog.scss'
import Button2 from '../../UI/button2/Button2'
import { memo } from 'react';
import { chooseBrand } from '../../../store2/actions/CatalogActions'



const breakpoints ={
  991.98: {
    slidesPerView: 6,
    spaceBetween: 30,
    
  },
 }

const navigation = {
  prevEl: '.slider-brand-catalog__prevButton',
  nextEl: '.slider-brand-catalog__nextButton',
}


 const BrandsCatalog = () => {
    const {brandsLoad,brands,checkedBrands} = useAppSelector((state)=>state.reducer.catalog)
    const dispatch = useAppDispatch()


  return (
    <div className="Catalog__brands brandsCatalog">
<div className="brandsCatalog__title">Можно выбрать несколько брендов</div>
{brandsLoad &&
 <div className="brandsCatalog__slider slider-brand-catalog">
 <div className="slider-brand-catalog__sliderCover">
 <Swiper
className='slider-brand-catalog__swiper'
modules={[Navigation]}
breakpoints={breakpoints}  
navigation={navigation}
spaceBetween={20}
slidesPerView={4}

>
{brands.map((e:any,i:any)=>
<SwiperSlide key={e.name}>
<div onClick={()=>dispatch(chooseBrand(e._id))} className={checkedBrands.includes(e._id) ? "slider-brand-catalog__item item-slider-brand-catalog active" : "slider-brand-catalog__item item-slider-brand-catalog"}>
<div className="item-slider-brand-catalog__boxshadow">
<div className="item-slider-brand-catalog__cover">
 <div className="item-slider-brand-catalog__absolute">
 <div className="item-slider-brand-catalog__image">
 <img src={`${API_URL}/brands/${brands[i].image}`} alt=""/>
 </div>
 <div className="item-slider-brand-catalog__check _icon-check"></div>
 </div>
</div>
</div>


</div>
</SwiperSlide>
)}


 </Swiper>
 </div>
 <div className="slider-brand-catalog__navigation">
<div className="slider-brand-catalog__prevButton _icon-arrow-bottom"></div>
<div className="slider-brand-catalog__nextButton _icon-arrow-bottom"></div>
 </div>
 <div className="slider-brand-catalog__spoiler">
     <ProductSpoiler changeName={false} className='brand'  >
     <Button2 className="buttonCart _width">Бренды</Button2>
     <div className="mobile-item-slider-brand-catalog__cover">
     {brands.map((e:any,i:any)=>
       <div key={e.name} onClick={()=>dispatch(chooseBrand(e._id))}  className={checkedBrands.includes(e._id) ? "slider-brand-catalog__item-mobile mobile-item-slider-brand-catalog active" : "slider-brand-catalog__item-mobile mobile-item-slider-brand-catalog"}>
       <div className="mobile-item-slider-brand-catalog__image">
       <img src={`${API_URL}/brands/${brands[i].image}`} alt=""/>
       </div>
       <div className="mobile-item-slider-brand-catalog__check _icon-check"></div>
   </div>
     )}
     </div>
     
 
   
    
     </ProductSpoiler>
 </div>
 </div>
}


    </div>
  )
}


export default memo(BrandsCatalog) 