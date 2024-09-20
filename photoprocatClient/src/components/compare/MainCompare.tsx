import { useEffect } from 'react';
import BodyCompare from './bodyCompare/BodyCompare';
import Navigation from '../UI/navigation/Navigation';
import { compareSlice } from '../../store2/reducers/CompareSlice';
import { putCompare, updateCompare } from '../../store2/actions/CompareActions';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import './compare.scss';
import SpinnerBody from '../UI/spinnerBody/SpinnerBody';

const MainCompare = () => {
  const { activeType, compare, compareTypes } = useAppSelector(
    (state) => state.reducer.compare
  );
  const { loadData } = useAppSelector((state) => state.reducer.user);
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
    <div className="Compare">
      <div className="Compare__container">
        <div className="Compare__body">
          <Navigation>Главная / Сравнить товары</Navigation>
          {loadData && activeType && compareTypes.length === 0 ? (
            <SpinnerBody />
          ) : compare && compare.compareItems.length !== 0 ? (
            <BodyCompare />
          ) : (
            <div className="Compare__none _icon-compare">Не выбраны товары</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCompare;
