import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectProducts, selectProductsLoad } from '../../../store2/selectors/catalogSelectors';
import './findCatalog.scss';

export const FindCatalog = () => {

  const productsLoad = useAppSelector(selectProductsLoad);
  const products = useAppSelector(selectProducts);
  
  return (
    <div className="count">
      Найдено{' '}
      <span>
        {productsLoad && products.count ? products.count : '0'} товара(ов)
      </span>
    </div>
  );
};
