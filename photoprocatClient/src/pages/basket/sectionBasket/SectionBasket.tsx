import ItemsBasket from '../itemsBasket/ItemsBasket';
import './sectionBasket.scss';

const SectionBasket = () => {
  return (
    <section className="topic">
      <h1 className="title">Корзина</h1>
      <ItemsBasket />
    </section>
  );
};

export default SectionBasket;
