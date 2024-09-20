import { Slider } from '@mui/material';
import './filtrCatalog.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { catalogSlice } from '../../store2/reducers/CatalogSlice';
import RadioGroup from '../../entities/radioGroup/RadioGroup';
import CheckBoxGroup from '../../entities/checkBoxGroup/CheckBoxGroup';
import MyNumber from '../../components/UI/myNumber/MyNumber';

export const FiltrsCatalog = () => {
  const { typeInformation, informations, informationValues, sliderMouseOn } =
    useAppSelector((state) => state.reducer.catalog);
  const dispatch = useAppDispatch();
  const { setInformationValues, setsliderMouseOn } = catalogSlice.actions;

  const changeVal = (val: number, type: string, pos: number) => {
    const value = [...sliderMouseOn[type]];

    value[pos] = val;

    dispatch(setsliderMouseOn({ ...sliderMouseOn, [type]: value }));
    dispatch(setInformationValues({ ...informationValues, [type]: value }));
  };

  const onChangeCommitted = (value: number | number[], typeName: string) => {
    dispatch(
      setInformationValues({
        ...informationValues,
        [typeName]: value as number[],
      })
    );
  };

  return (
    <>
      {typeInformation &&
        Object.entries(typeInformation).map((el) => {
          const type = el[1];
          const typeName = el[0];

          let arr = [
            ...informations
              .filter((fil) => fil.name == typeName)
              .map((ee) => ee.description),
          ];
          arr = arr.filter((fil, pos) => arr.indexOf(fil) === pos);

          if (type == 'radio') {
            return (
              <div key={typeName} className="GroupCover">
                <div className="GroupCover__name">{typeName}</div>
                <RadioGroup typeName={typeName} arr={arr as string[]} />
              </div>
            );
          }

          if (type == 'check') {
            return (
              <div key={typeName} className="GroupCover">
                <div className="GroupCover__name">{typeName}</div>
                <CheckBoxGroup typeName={typeName} arr={arr as string[]} />
              </div>
            );
          }

          if (type == 'slider') {
            if (arr.length === 1) {
              arr = ['0', arr[0]];
            }

            return (
              <div key={typeName} className="GroupCover">
                <div className="right-main-catalog__slider  slider-right-main-catalog ">
                  <div className="GroupCover__name">{typeName}</div>
                  <div className="right-main-catalog__slider slider-right-main-catalog">
                    <Slider
                      valueLabelDisplay="auto"
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
                      ) => onChangeCommitted(value, typeName)}
                      min={Number(arr.sort((a, b) => +a - +b)[0])}
                      max={Number(arr.sort((a, b) => +b - +a)[0])}
                    />
                    <div className="slider-right-main-catalog__sliderInputs">
                      <MyNumber
                        min={Number(arr.sort((a, b) => +a - +b)[0])}
                        max={informationValues[typeName][1] as number}
                        value={sliderMouseOn[typeName][0]}
                        setValue={(e) => changeVal(e, typeName, 0)}
                        className="slider-right-main-catalog__sliderInput"
                      />

                      <div className="slider-right-main-catalog__d">-</div>

                      <MyNumber
                        min={informationValues[typeName][0] as number}
                        max={Number(arr.sort((a, b) => +b - +a)[0])}
                        value={sliderMouseOn[typeName][1]}
                        setValue={(e) => changeVal(e, typeName, 1)}
                        className="slider-right-main-catalog__sliderInput"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};
