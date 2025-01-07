import Navigation from '../../../shared/UI/navigation/Navigation';
import { BodyCatalog } from '../bodyCatalog/BodyCatalog';
import { FindCatalog } from '../findCatalog/FindCatalog';
import { TopCatalog } from '../topCatalog/TopCatalog';
import './catalog.scss';
import BrandsCatalog from '../brandsCatalog/BrandsCatalog';

export const MainCatalog = () => {
  return (
    <main className="Catalog">
      <div className="Catalog__container">
        <Navigation>Главная / Каталог</Navigation>
        <TopCatalog />
        <BrandsCatalog />
        <FindCatalog />
        <BodyCatalog />
      </div>
    </main>
  );
};
