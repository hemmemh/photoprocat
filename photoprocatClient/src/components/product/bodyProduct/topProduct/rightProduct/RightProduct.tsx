import React from 'react'
import InfoProduct from './infoProduct/InfoProduct'
import DescriptionProduct from './descriptionProduct/DescriptionProduct'

const RightProduct = () => {
  return (
    <div className="main-product__right">
        <InfoProduct/>
        <DescriptionProduct/>    
    </div>
  )
}

export default RightProduct