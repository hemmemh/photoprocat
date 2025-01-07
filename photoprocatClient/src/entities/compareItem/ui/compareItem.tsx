import { FC, memo } from 'react';
import { API_URL } from '../../../shared/utils/config';
import './compareItem.scss';
import { removeFromCompare } from '../model/CompareActions';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../app/config/routs';
import { ICompareItem } from '../../../shared/https/compareApi';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks';

interface ICompareItemInterface {
  el: ICompareItem;
}

const CompareItem: FC<ICompareItemInterface> = ({ el }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="item-swiperCompare">
      <div
        onClick={() => navigate(`${PRODUCT_ROUTE}/${el.product._id}`)}
        className="item-swiperCompare__image-cover"
      >
        <div className="item-swiperCompare__image">
          <img
            src={`${API_URL}/${el.product.name}/${JSON.parse(el.product.images)[0]}`}
            alt=""
          />
        </div>
      </div>
      <div
        onClick={() => dispatch(removeFromCompare(el.product._id))}
        className="item-swiperCompare__delete"
      ></div>
      <div className="item-swiperCompare__name">{el.product.name}</div>
      <div className="item-swiperCompare__brand">{el.product.brand.name}</div>
    </div>
  );
};

export default memo(CompareItem);
