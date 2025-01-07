import { memo } from 'react';
import Radio from '../../shared/UI/radio/Radio';
import { catalogSlice } from '../catalog/model/CatalogSlice';
import './radioGroup.scss';
import { selectInformationValues } from '../catalog/model/catalogSelectors';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/reduxHooks';

const RadioGroup = ({ arr, typeName }: { arr: string[]; typeName: string }) => {
  const informationValues = useAppSelector(selectInformationValues);

  const dispatch = useAppDispatch();
  const { setInformationValues } = catalogSlice.actions;

  return (
    <div className="RadioGroup">
      {
        <>
          <Radio
            className="radioFiltr"
            id={'неважно'}
            name={typeName}
            setValue={(ru) =>
              dispatch(
                setInformationValues({
                  ...informationValues,
                  [typeName]: ru as string,
                })
              )
            }
            key={'все'}
            value={informationValues[typeName] as string}
          >
            <div className={`RadioGroup__check`}></div>
            <div className={`RadioGroup__label`}>все</div>
          </Radio>
          {arr.map((el: string) => (
            <Radio
              className="radioFiltr"
              id={el}
              name={typeName}
              setValue={(ru) =>
                dispatch(
                  setInformationValues({
                    ...informationValues,
                    [typeName]: ru as string,
                  })
                )
              }
              key={el}
              value={informationValues[typeName] as string}
            >
              <div className={`RadioGroup__check`}></div>
              <div className={`RadioGroup__label`}>{el}</div>
            </Radio>
          ))}
        </>
      }
    </div>
  );
};

export default memo(RadioGroup);
