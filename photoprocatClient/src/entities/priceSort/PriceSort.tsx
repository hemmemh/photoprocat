import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { catalogSlice } from '../../store2/reducers/CatalogSlice';
import { Slider } from '@mui/material';
import useCheckMobileScreen from '../../hooks/DetectMobileHook';
import './priceSort.scss';
import MyNumber from '../../components/UI/myNumber/MyNumber';
import { selectMinMaxPrice, selectpriceRange } from '../../store2/selectors/catalogSelectors';

const PriceSort = () => {
  const priceRange = useAppSelector(selectpriceRange);
  const minMaxPrice = useAppSelector(selectMinMaxPrice);
  const dispatch = useAppDispatch();
  const { setPriceRange, setPriceValue } = catalogSlice.actions;
  const isMobile = useCheckMobileScreen(991.98);
  const changeVal = (val: number, pos: number) => {
    console.log(priceRange[0], val, pos);

    const value = [...priceRange];

    value[pos] = val;

    dispatch(setPriceRange(value));
    dispatch(setPriceValue(value));
  };

  return (
    <div className="right-main-catalog__slider slider-right-main-catalog price">
      {!isMobile && <div className="slider-right-main-catalog__name">Цена</div>}
      <Slider
        valueLabelDisplay="auto"
        value={priceRange}
        onChange={(_event: Event, value: number | number[]) =>
          dispatch(setPriceRange(value as number[]))
        }
        onChangeCommitted={(
          _event: Event | React.SyntheticEvent<Element, Event>,
          value: number | number[]
        ) => dispatch(setPriceValue(value))}
        min={minMaxPrice[0]}
        max={minMaxPrice[1]}
      />

      <div className="slider-right-main-catalog__sliderInputs">
        <MyNumber
          min={minMaxPrice[0]}
          max={priceRange[1]}
          value={priceRange[0]}
          setValue={(e) => changeVal(e, 0)}
          className="slider-right-main-catalog__sliderInput"
        />

        <div className="slider-right-main-catalog__d">-</div>
        <MyNumber
          min={priceRange[0]}
          max={minMaxPrice[1]}
          value={priceRange[1]}
          setValue={(e) => changeVal(e, 1)}
          className="slider-right-main-catalog__sliderInput"
        />
      </div>
    </div>
  );
};

export default memo(PriceSort);
