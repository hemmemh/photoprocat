import { FilterProductsMobile } from '../../../features/filterProductsMobile/FilterProductsMobile';
import { SortProducts } from '../../../features/sortProducts/SortProducts';
import { GridCatalog } from '../gridCatalog/GridCatalog';
import './leftCatalog.scss';

export const LeftCatalog = () => {
  return (
    <div className="left">
      <SortProducts />
      <FilterProductsMobile />
      <GridCatalog />
    </div>
  );
};
