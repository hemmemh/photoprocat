import BodyProduct from '../bodyProduct/BodyProduct';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProduct } from '../../../entities/productItem/model/ProductActions';
import './product.scss';
import ProductRaiting from '../../../features/rateProduct/RateProduct';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks';

const ProductMain = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    dispatch(getProduct(id));
  }, []);

  return (
    <main className="Product">
      <BodyProduct />
      <ProductRaiting />
    </main>
  );
};

export default ProductMain;
