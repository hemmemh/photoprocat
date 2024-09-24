import { FC, useState, useEffect, memo } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { changeAm, removeFromBasket } from '../../store2/actions/BasketActions';
import { API_URL } from '../../utils/config';
import './basketProduct.scss';
import Amount from '../../components/UI/amount/Amount';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../app/config/routs';
import { IBasketItem } from '../../https/basketApi';

interface BasketProduct {
  e: IBasketItem;
}

const BasketProduct: FC<BasketProduct> = ({ e }) => {
  const [amount, setamount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setamount(e.count);
  }, []);

  const setAmount = (e: IBasketItem, el: number) => {
    dispatch(changeAm(e, el, amount));
    setamount(el);
  };

  const onRemove = () => {
    dispatch(removeFromBasket(e.product._id));
  };

  return (
    <div className="items-basket__product">
      <div className="items-basket__image-flex">
        <div
          onClick={() => navigate(`${PRODUCT_ROUTE}/${e.product._id}`)}
          className="items-basket__image-cover"
        >
          <div className="items-basket__image">
            <img
              src={`${API_URL}/${e.product.name}/${JSON.parse(e.product.images)[0]}`}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="items-basket__info">
        <div className="items-basket__name">{e.product.name}</div>
        <div className="items-basket__brand">{e.product.brand.name}</div>
      </div>
      <div className="items-basket__price">{e.product.price} Р</div>
      <div className="items-basket__amount amount-basket">
        <Amount
          value={amount}
          change={(el) => setAmount(e, el)}
          classAmount="basket"
        />
      </div>
      <div className="items-basket__total">{e.product.price * amount} Р</div>
      <div
        onClick={onRemove}
        className="items-basket__delete _icon-delete"
      ></div>
    </div>
  );
};

export default memo(BasketProduct);
