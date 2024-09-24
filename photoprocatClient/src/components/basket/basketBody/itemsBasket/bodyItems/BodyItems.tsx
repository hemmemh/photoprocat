import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../hooks/reduxHooks';
import { basketSlice } from '../../../../../store2/reducers/BasketSlice';
import { useEffect } from 'react';
import BasketProduct from '../../../../../entities/basketProduct/BasketProduct';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './bodyItems.scss';
import { IBasketItem } from '../../../../../https/basketApi';
import { selectBasket } from '../../../../../store2/selectors/basketSelectors';

const BodyItems = () => {
  const basket = useAppSelector(selectBasket)
  const { setSumPrice } = basketSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const sum =
      basket?.basketItems.reduce(
        (prev, current) => current?.product?.price * current.count + prev,
        0
      ) ?? 0;
    dispatch(setSumPrice(sum));
  }, []);

  return (
    <TransitionGroup>
      {basket?.basketItems.map((e: IBasketItem) => (
        <CSSTransition key={e._id} timeout={500} classNames="basket">
          <BasketProduct key={e._id} e={e} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default BodyItems;
