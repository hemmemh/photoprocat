import BodyProduct from './bodyProduct/BodyProduct';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProduct } from '../../store2/actions/ProductActions';
import { useAppDispatch } from '../../hooks/reduxHooks';
import './product.scss';
import ProductRaiting from '../../features/productRaiting/ProductRaiting';

const ProductMain = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    dispatch(getProduct(id));
  }, []);

  return (
    <div className="Product">
      <BodyProduct />
      <ProductRaiting />
    </div>
  );
};

export default ProductMain;
