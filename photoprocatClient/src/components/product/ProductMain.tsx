import ModalRaiting from './modalRaiting/ModalRaiting'
import BodyProduct from './bodyProduct/BodyProduct'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getProduct } from '../../store2/actions/ProductActions'
import { useAppDispatch } from '../../hooks/reduxHooks'
import './product.scss'
const ProductMain = () => {

    const dispatch = useAppDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch(getProduct(id))
}, [])


  return (
    <div className="Product">
        <BodyProduct/>
        <ModalRaiting/>
   </div>
  )
}

export default ProductMain