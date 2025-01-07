import Button2 from '../../../shared/UI/button2/Button2';
import ProductSpoiler from '../../../shared/UI/productSpoiler/ProductSpoiler';
import Radio from '../../../shared/UI/radio/Radio';
import { catalogSlice } from '../../../entities/catalog/model/CatalogSlice';
import { selectSort } from '../../../entities/catalog/model/catalogSelectors';
import './optionsSort.scss';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';

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
