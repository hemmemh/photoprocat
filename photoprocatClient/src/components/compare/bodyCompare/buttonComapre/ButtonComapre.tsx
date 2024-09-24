import React from 'react';
import Button from '../../../UI/button/Button';
import './buttonCompare.scss';
import { compareSlice } from '../../../../store2/reducers/CompareSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { selectFold } from '../../../../store2/selectors/compareSelectors';

const ButtonComapre = () => {

  const fold = useAppSelector(selectFold);
  const { setFold } = compareSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="button">
      <Button onClick={() => dispatch(setFold(!fold))} className="compare g">
        {fold ? 'Свернуть' : 'Показать все'}
      </Button>
    </div>
  );
};

export default ButtonComapre;
