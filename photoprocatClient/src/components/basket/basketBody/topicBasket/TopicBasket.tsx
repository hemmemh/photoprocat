import ItemsBasket from '../itemsBasket/ItemsBasket';
import './topicBasket.scss';

const TopicBasket = () => {
  return (
    <div className="topic">
      <div className="title">Корзина</div>
      <ItemsBasket />
    </div>
  );
};

export default TopicBasket;
