import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectType } from '../../../store2/selectors/catalogSelectors';
import './topCatalog.scss';

export const TopCatalog = () => {
  const type = useAppSelector(selectType);
  return (
    <div className="Catalog__top top-catalog">
      <div className="top-catalog__title">{type?.name}</div>
      <div className="top-catalog__text">
        Отложение, основываясь большей частью на сейсмических данных, не входит
        своими составляющими, что очевидно, в силы нормальных реакций связей,
        так же как и абразивный блеск. Следует отметить, что инфлюация
        значительно характеризует астатический батолит.
      </div>
    </div>
  );
};
