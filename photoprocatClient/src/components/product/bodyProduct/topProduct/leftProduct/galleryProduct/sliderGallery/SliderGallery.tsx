import React from 'react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { API_URL } from '../../../../../../../utils/config'
import { useAppSelector } from '../../../../../../../hooks/reduxHooks'

const SliderGallery = ({thumbsSwiper}:{thumbsSwiper:any}) => {
    const {product} = useAppSelector((state)=>state.reducer.product)

  return (
    <div className="gallery-product__slider">
        <Swiper
            spaceBetween={10}
              //navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
            {JSON.parse(product?.images || '').map((e:any)=>       
              <SwiperSlide key={e}>
                <div className="gallery-product__sliderItem">
                <img src={`${API_URL}/${product?.name}/${e}`} alt=""/>
                </div>
              </SwiperSlide>
            ) }
        </Swiper>
    </div>
  )
}

export default SliderGallery