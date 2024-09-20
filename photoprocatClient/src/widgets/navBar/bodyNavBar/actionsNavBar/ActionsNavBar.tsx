import { useNavigate } from 'react-router-dom';
import {
  BASKET_ROUTE,
  COMPARE_ROUTE,
  LOVES_ROUTE,
} from '../../../../app/config/routs';
import { memo } from 'react';
import useCompareAndBasketLength from '../../../../hooks/useCompareAndBasketLength';
import './actionsNavBar.scss';

const ActionsNavBar = () => {
  const navigate = useNavigate();
  const { basketLength, compareLength, lovesLength } =
    useCompareAndBasketLength();

  return (
    <div className="actionsMenu">
      <div
        onClick={() => navigate(LOVES_ROUTE)}
        className="actionsMenu__action _icon-star"
      >
        {lovesLength !== 0 && (
          <span className="actionsMenu__span _loves">{lovesLength}</span>
        )}
      </div>
      <div
        onClick={() => navigate(COMPARE_ROUTE)}
        className="actionsMenu__action _icon-compare"
      >
        {compareLength !== 0 && (
          <span className="actionsMenu__span _compare">{compareLength}</span>
        )}
      </div>
      <div
        onClick={() => navigate(BASKET_ROUTE)}
        className="actionsMenu__action _icon-cart"
      >
        {basketLength !== 0 && (
          <span className="actionsMenu__span _product">{basketLength}</span>
        )}
      </div>
    </div>
  );
};

export default memo(ActionsNavBar);
