import { FiltrsCatalog } from '../../../../features/fitrsCatalog/FiltrsCatalog';
import PriceSort from '../../../../entities/priceSort/PriceSort';
import './rightCatalog.scss';

export const RightCatalog = () => {
  return (
    <div className="mainCatalog__right right-main-catalog">
      <FiltrsCatalog />
      <PriceSort />
    </div>
  );
};
