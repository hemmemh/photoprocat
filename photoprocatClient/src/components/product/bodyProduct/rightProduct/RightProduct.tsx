import React from 'react';
import InfoProduct from '../infoProduct/InfoProduct';
import DescriptionProduct from '../descriptionProduct/DescriptionProduct';
import './rightProduct.scss';

const RightProduct = () => {
  return (
    <div className="right">
      <InfoProduct />
      <DescriptionProduct />
    </div>
  );
};

export default RightProduct;
