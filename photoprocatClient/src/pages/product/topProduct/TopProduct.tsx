import React from 'react';
import LeftProduct from '../leftProduct/LeftProduct';
import RightProduct from '../rightProduct/RightProduct';
import './topProduct.scss';

const TopProduct = () => {
  return (
    <div className="Product__main main-product">
      <LeftProduct />
      <RightProduct />
    </div>
  );
};

export default TopProduct;
