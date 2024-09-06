import React from 'react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { API_URL } from '../../../../../../../utils/config'
import { useAppSelector } from '../../../../../../../hooks/reduxHooks'

const ThumbsGallery = ({setThumbsSwiper}:{setThumbsSwiper:(a: any) => void}) => {
    const {product} = useAppSelector((state)=>state.reducer.product)


  return (
    <div className="gallery-product__thumbs">
      <Swiper
        onSwiper={setThumbsSwiper}
          direction='vertical'
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
        {JSON.parse(product?.images || '').map((e:any)=>       
          <SwiperSlide key={e}>
            <div className="gallery-product__thumpItem">
              <img src={`${API_URL}/${product?.name}/${e}`} alt=""/>
            </div>
          </SwiperSlide>
        ) }
      </Swiper>
    </div>
  )
}

export default ThumbsGallery