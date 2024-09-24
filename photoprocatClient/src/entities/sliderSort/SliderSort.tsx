import { Slider } from '@mui/material';
import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { catalogSlice } from '../../store2/reducers/CatalogSlice';
import './sliderSort.scss';
import { selectInformationValues, selectSliderMouseOn } from '../../store2/selectors/catalogSelectors';

const SliderSort = ({ typeName, arr }: { typeName: string; arr: string[] }) => {
  const informationValues = useAppSelector(selectInformationValues);
  const sliderMouseOn = useAppSelector(selectSliderMouseOn);
  
  const dispatch = useAppDispatch();
  const { setInformationValues, setsliderMouseOn } = catalogSlice.actions;

  return (
    <div className="right-main-catalog__slider slider-right-main-catalog">
      <Slider
        key={typeName}
        value={sliderMouseOn[typeName]}
        onChange={(_event: Event, value: number | number[]) =>
          dispatch(
            setsliderMouseOn({
              ...sliderMouseOn,
              [typeName]: value as number[],
            })
          )
        }
        onChangeCommitted={(
          _event: Event | React.SyntheticEvent<Element, Event>,
          value: number | number[]
        ) =>
          dispatch(
            setInformationValues({
              ...informationValues,
              [typeName]: value as number[],
            })
          )
        }
        min={Number(arr.sort((a, b) => +a - +b)[0])}
        max={Number(arr.sort((a, b) => +b - +a)[0])}
      />
      <div className="slider-right-main-catalog__sliderInputs">
        <input
          type="text"
          value={`От ${sliderMouseOn[typeName][0]}`}
          className="slider-right-main-catalog__sliderInput"
        ></input>
        <div className="slider-right-main-catalog__d">-</div>

        <input
          type="text"
          value={`До ${sliderMouseOn[typeName][1]}`}
          className="slider-right-main-catalog__sliderInput"
        ></input>
      </div>
    </div>
  );
};

export default memo(SliderSort);
