import React from 'react';
import Button from '../../../shared/UI/button/Button';
import './buttonCompare.scss';
import { compareSlice } from '../../../entities/compareItem/model/CompareSlice';
import { selectFold } from '../../../entities/compareItem/model/compareSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';

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
