import { ItemWork } from './itemWork/ItemWork';
import cls from './workHome.module.scss';

const items = [
  {
    name: 'Фотопрокат Zoom',
    locale: 'Малая Ордынка, 25',
    link: 'http://zoom-prokat.ru',
  },
  {
    name: 'Rental Photo',
    locale: 'Киркорова, 180/1',
    link: 'http://rentalphoto.com',
  },
  {
    name: 'Panasonic Company',
    locale: 'Малая Ордынка, 25',
    link: 'http://zoom-prokat.ru',
  },
  {
    name: 'Торговый Центр',
    locale: 'Киркорова, 180/1',
    link: 'http://rentalphoto.com',
  },
];

export const WorkHome = () => {
  return (
    <div className={cls.workHome}>
      <div className={cls.map}>
        <img src={require('../../../images/home/map.png')} alt="" />
      </div>

      <div className="__container">
        <div className={cls.body}>
          <div className={cls.title}>С кем мы работаем</div>
          <div className={cls.items}>
            {items.map((item) => (
              <ItemWork
                key={item.name}
                name={item.name}
                locale={item.locale}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
