import React from 'react';
import GalleryProduct from '../../../../widgets/galleryProduct/GalleryProduct';
import TagsProduct from './tagsProduct/TagsProduct';
import './leftProduct.scss';

const LeftProduct = () => {
  return (
    <div className="left">
      <GalleryProduct />
      <TagsProduct />
    </div>
  );
};

export default LeftProduct;
