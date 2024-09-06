import React, { useState,memo } from 'react'
import ActionsGallery from './actionsGallery/ActionsGallery'
import SliderGallery from './sliderGallery/SliderGallery'
import ThumbsGallery from './thumbsGallery/ThumbsGallery'
import './galleryProduct.scss'
const GalleryProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="main-product__gallery gallery-product">
        <ActionsGallery />
        <SliderGallery  thumbsSwiper={thumbsSwiper}/>
        <ThumbsGallery setThumbsSwiper={setThumbsSwiper}/>
</div>
  )
}

export default memo( GalleryProduct)