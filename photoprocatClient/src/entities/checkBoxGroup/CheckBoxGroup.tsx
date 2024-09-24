import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { catalogSlice } from '../../store2/reducers/CatalogSlice';
import CheckBox from '../../components/UI/checkBox/CheckBox';
import './checkBoxGroup.scss';
import { memo } from 'react';
import { selectInformationValues } from '../../store2/selectors/catalogSelectors';

const CheckBoxGroup = ({
  arr,
  typeName,
}: {
  arr: string[];
  typeName: string;
}) => {
  const informationValues = useAppSelector(selectInformationValues);

  const dispatch = useAppDispatch();
  const { setInformationValues } = catalogSlice.actions;

  return (
    <div className="CheckBoxGroup">
      {Array.isArray(informationValues[typeName]) &&
        arr.map((el: string) => (
          <CheckBox
            key={el}
            value={informationValues[typeName] as string[]}
            change={(ru) =>
              dispatch(
                setInformationValues({ ...informationValues, [typeName]: ru })
              )
            }
            id={el}
            className="checkBoxFiltr"
          >
            <div className={'CheckBox__check'}></div>
            <div className={'CheckBox__label'}>{el}</div>
          </CheckBox>
        ))}
    </div>
  );
};

export default memo(CheckBoxGroup) ;
