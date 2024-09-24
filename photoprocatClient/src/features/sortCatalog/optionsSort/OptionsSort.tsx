import Button2 from '../../../components/UI/button2/Button2';
import ProductSpoiler from '../../../components/UI/productSpoiler/ProductSpoiler';
import Radio from '../../../components/UI/radio/Radio';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { catalogSlice } from '../../../store2/reducers/CatalogSlice';
import { selectSort } from '../../../store2/selectors/catalogSelectors';
import './optionsSort.scss';

const sorts = [
  { purchaseNumber: 'По популярности' },
  { price: 'По цене' },
  { rating: 'По рейтингу' },
  { date: 'По дате' },
];

const OptionsSort = () => {
  const dispatch = useAppDispatch();
  const { setSort } = catalogSlice.actions;
  const sort = useAppSelector(selectSort);

  return (
    <div className="options">
      <div className="desktop">
        {sorts.map((item) => (
          <Radio
            key={Object.keys(item)[0]}
            value={sort}
            id={Object.keys(item)[0]}
            name="sorts"
            setValue={() => dispatch(setSort(Object.keys(item)[0]))}
          >
            <Button2 className="sortButton">{Object.values(item)[0]}</Button2>
          </Radio>
        ))}
      </div>

      <ProductSpoiler className="mobile">
        <Button2 className="sortButton _d">Сортировать по</Button2>
        <div>
          {sorts.map((item) => (
            <Radio
              key={`${Object.keys(item)[0]} spoiler`}
              value={sort}
              id={Object.keys(item)[0]}
              name="sorts"
              setValue={() => dispatch(setSort(Object.keys(item)[0]))}
            >
              <Button2 className="sortButton _d">
                {Object.values(item)[0]}
              </Button2>
            </Radio>
          ))}
        </div>
      </ProductSpoiler>
    </div>
  );
};

export default OptionsSort;
