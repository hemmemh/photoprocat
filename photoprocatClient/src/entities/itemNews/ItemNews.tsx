import { Rating } from '@mui/material';
import Button from '../../components/UI/button/Button';
import './itemNews.scss';

const ItemNews = () => {
  return (
    <div className="right-news__item item-right">
      <div className="item-right__image-cover">
        <div className="item-right__image">
          <img
            src={require('../../../../../images/home/slider/1.png')}
            alt=""
          />
        </div>
      </div>
      <div className="item-right__name">PowerShot SX620 HS</div>
      <div className="item-right__brand">Canon</div>
      <div className="item-right__price">От 1 850 Р</div>
      <div className="item-right__rating">
        <Rating />
      </div>
      <div className="item-right__button">
        <Button className="news g">Подробнее</Button>
      </div>
      <div className="item-right__actions">
        <div className="item-right__action _icon-compare"></div>
        <div className="item-right__action _icon-star"></div>
      </div>
    </div>
  );
};

export default ItemNews;
