import Radio from '../../components/UI/radio/Radio';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { catalogSlice } from '../../store2/reducers/CatalogSlice';
import './radioGroup.scss';

const RadioGroup = ({ arr, typeName }: { arr: string[]; typeName: string }) => {
  const { informationValues } = useAppSelector(
    (state) => state.reducer.catalog
  );
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

export default RadioGroup;
