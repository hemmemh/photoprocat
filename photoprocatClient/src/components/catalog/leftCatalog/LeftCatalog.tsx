import { FilterMobile } from '../../../features/filterMobile/FilterMobile';
import { SortCatalog } from '../../../features/sortCatalog/SortCatalog';
import { GridCatalog } from '../gridCatalog/GridCatalog';
import './leftCatalog.scss';

export const LeftCatalog = () => {
  return (
    <div className="left">
      <SortCatalog />
      <FilterMobile />
      <GridCatalog />
    </div>
  );
};
