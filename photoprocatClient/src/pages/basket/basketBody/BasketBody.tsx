
import './basketBody.scss';
import SpinnerBody from '../../../shared/UI/spinnerBody/SpinnerBody';
import { selectBasket, selectBasketLoad} from '../../../entities/basketProduct/model/basketSelectors';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import SectionBasket from '../sectionBasket/SectionBasket';

export const BasketBody = () => {
  const basket = useAppSelector(selectBasket)
  const load= useAppSelector(selectBasketLoad)

  return (
    <>
      {load ? (
        <SpinnerBody />
      ) : basket && basket.basketItems.length !== 0 ? (
        <SectionBasket />
      ) : (
        <div className="none _icon-cart">нет товаров</div>
      )}
    </>
  );
};
