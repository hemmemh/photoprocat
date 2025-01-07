import cls from './DirectionSort.module.scss';
import Button2 from '../../../shared/UI/button2/Button2';
import Radio from '../../../shared/UI/radio/Radio';
import { catalogSlice } from '../../../entities/catalog/model/CatalogSlice';
import { selectSortNumber } from '../../../entities/catalog/model/catalogSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';

const items = [
  { direct: 1, class: '' },
  { direct: -1, class: '_direct' },
];
const DirectionSort = () => {
  const dispatch = useAppDispatch();
  const { setSortNumber } = catalogSlice.actions;
  const sortNumber = useAppSelector(selectSortNumber);

  return (
    <div className={cls.directSort}>
      {items.map((el) => (
        <Radio
          id={el.direct}
          name="adawd"
          key={el.direct}
          value={sortNumber}
          setValue={() => dispatch(setSortNumber(el.direct))}
        >
          <Button2
            className={` ${cls.sortButton}  ${el.direct === sortNumber && cls.active} ${el.class && cls._direct}  _icon-arrow-bottom `}
          ></Button2>
        </Radio>
      ))}
    </div>
  );
};

export default DirectionSort;
