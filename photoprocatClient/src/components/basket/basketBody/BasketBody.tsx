import TopicBasket from './topicBasket/TopicBasket';
import { useAppSelector } from '../../../hooks/reduxHooks';
import './basketBody.scss';
import SpinnerBody from '../../UI/spinnerBody/SpinnerBody';

export const BasketBody = () => {
  const { basket, load } = useAppSelector((state) => state.reducer.basket);

  return (
    <>
      {load ? (
        <SpinnerBody />
      ) : basket && basket.basketItems.length !== 0 ? (
        <TopicBasket />
      ) : (
        <div className="none _icon-cart">нет товаров</div>
      )}
    </>
  );
};
