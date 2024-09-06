import React from 'react'
import GalleryProduct from './galleryProduct/GalleryProduct'
import TagsProduct from './tagsProduct/TagsProduct'

const LeftProduct = () => {
  return (
    <div className="main-product__left">
        <GalleryProduct/>
        <TagsProduct/>
    </div>
  )
}

export default LeftProduct