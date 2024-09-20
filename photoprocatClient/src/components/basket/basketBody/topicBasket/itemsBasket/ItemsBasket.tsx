import BodyItems from './bodyItems/BodyItems';
import BottomItems from './bottomItems/BottomItems';
import TopItems from './topItems/TopItems';
import './itemsBasket.scss';

const ItemsBasket = () => {
  return (
    <div className="items-basket">
      <TopItems />
      <BodyItems />
      <BottomItems />
    </div>
  );
};

export default ItemsBasket;
