import './topItems.scss';

const items = ['Фото', 'Название', 'Цена', 'Количество', 'Итого'];

const TopItems = () => {
  return (
    <div className="top-basket">
      {items.map((item) => (
        <div key={item} className="top-basket__item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default TopItems;
