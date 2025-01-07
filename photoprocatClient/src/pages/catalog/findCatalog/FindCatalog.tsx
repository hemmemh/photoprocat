
import { selectProducts, selectProductsLoad } from '../../../entities/catalog/model/catalogSelectors';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
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
