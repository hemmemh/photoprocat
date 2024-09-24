import TopicBasket from './topicBasket/TopicBasket';
import { useAppSelector } from '../../../hooks/reduxHooks';
import './basketBody.scss';
import SpinnerBody from '../../UI/spinnerBody/SpinnerBody';
import { selectBasket, selectBasketLoad} from '../../../store2/selectors/basketSelectors';

export const BasketBody = () => {
  const basket = useAppSelector(selectBasket)
  const load= useAppSelector(selectBasketLoad)

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
