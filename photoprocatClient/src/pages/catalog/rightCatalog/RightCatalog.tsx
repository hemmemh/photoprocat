
import PriceSort from '../../../entities/priceSort/PriceSort';
import { FilterProducts } from '../../../features/filterProducts/FilterProducts';
import './rightCatalog.scss';

export const RightCatalog = () => {
  return (
    <aside className="mainCatalog__right right-main-catalog">
      <FilterProducts />
      <PriceSort />
    </aside>
  );
};
