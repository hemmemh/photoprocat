import { useEffect } from 'react';
import './compare.scss';
import { selectActiveType, selectCompare, selectCompareLoad } from '../../../entities/compareItem/model/compareSelectors';
import { compareSlice } from '../../../entities/compareItem/model/CompareSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';
import { putCompare, updateCompare } from '../../../entities/compareItem/model/CompareActions';
import Navigation from '../../../shared/UI/navigation/Navigation';
import SpinnerBody from '../../../shared/UI/spinnerBody/SpinnerBody';
import BodyCompare from '../bodyCompare/BodyCompare';


const MainCompare = () => {
  const activeType = useAppSelector(selectActiveType);
  const compare = useAppSelector(selectCompare);
  const loadData = useAppSelector(selectCompareLoad);
  
  const { setActiveTypeLoad } = compareSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(putCompare);
  }, []);

  useEffect(() => {
    dispatch(updateCompare());
  }, [compare]);

  useEffect(() => {
    if (activeType !== 'Типы') {
      dispatch(setActiveTypeLoad(false));
    }
  }, [activeType]);

  return (
    <main className="Compare">
      <div className="Compare__container">
        <div className="Compare__body">
          <Navigation>Главная / Сравнить товары</Navigation>
          {loadData  ? (
            <SpinnerBody />
          ) : compare && compare.compareItems.length !== 0 ? (
            <BodyCompare />
          ) : (
            <div className="Compare__none _icon-compare">Не выбраны товары</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainCompare;
