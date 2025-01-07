import Navigation from '../../../shared/UI/navigation/Navigation';
import { BasketBody } from '../basketBody/BasketBody';
import './basket.scss';

const MainBasket = () => {
  return (
    <main className="Basket">
      <div className="Basket__container">
        <div className="Basket__body">
          <Navigation navigationClass="basket">Главная / Корзина</Navigation>
          <BasketBody />
        </div>
      </div>
    </main>
  );
};

export default MainBasket;
