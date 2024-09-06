import Navigation from '../../../../../UI/navigation/Navigation'

import Button from '../../../../../UI/button/Button'
import { Rating } from '@mui/material'
import { useParams } from 'react-router-dom'
import { addToBasket } from '../../../../../../store2/actions/ProductActions'
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/reduxHooks'
import Button2 from '../../../../../UI/button2/Button2'
import {ReactComponent as CartSvg} from '../../../../../../images/cart.svg'
import Loader from '../../../../../UI/loader/Loader'
const InfoProduct = () => {
    const {product,raiting,inBasket,loaders} = useAppSelector((state)=>state.reducer.product)
    const dispatch = useAppDispatch()
    const {id} = useParams()


  return (
    <div className="main-product__info info-product">
        <Navigation navigationClass='product _d2'>Главная / {product?.type.name} / {product?.brand.name} / {product?.name}</Navigation>
        <div className="main-product__brand">{product?.brand.name}</div>
        <div className="main-product__name">{product?.name}</div>
        <div className="main-product__actions">
            <Button ripple={true} className='product-1 dr'>В наличии</Button>
            <Button2 onClick={()=>dispatch(addToBasket(id))} ripple={true} className={inBasket ? 'buttonCart  active ': 'buttonCart'} >{!loaders.basket ? <Loader className={'basketLoaderProduct'} /> : <CartSvg/>}{inBasket ? 'В корзине' : 'В корзину'}</Button2>
        </div>
        <div className="main-product__raiting">
            <Rating value={raiting} readOnly/>
        </div>
    </div>
  )
}

export default InfoProduct