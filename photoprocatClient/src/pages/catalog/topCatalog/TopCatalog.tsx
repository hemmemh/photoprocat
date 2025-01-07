
import { selectType } from '../../../entities/catalog/model/catalogSelectors';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import './topCatalog.scss';

export const TopCatalog = () => {
  const type = useAppSelector(selectType);
  return (
    <section className="Catalog__top top-catalog">
      <h2 className="top-catalog__title">{type?.name}</h2>
      <p className="top-catalog__text">
        Отложение, основываясь большей частью на сейсмических данных, не входит
        своими составляющими, что очевидно, в силы нормальных реакций связей,
        так же как и абразивный блеск. Следует отметить, что инфлюация
        значительно характеризует астатический батолит.
      </p>
    </section>
  );
};
