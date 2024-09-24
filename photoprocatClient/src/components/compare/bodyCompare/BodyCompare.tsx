import React, { useState } from 'react';
import TopCompare from './topCompare/TopCompare';
import BottomCompare from './bottomCompare/BottomCompare';
import ButtonComapre from './buttonComapre/ButtonComapre';
import ItemsCompare from './itemsCompare/ItemsCompare';
import { useAppSelector } from '../../../hooks/reduxHooks';
import './BodyCompare.scss';
import Swiper from 'swiper';
import { selectCompare } from '../../../store2/selectors/compareSelectors';

const BodyCompare = () => {
  const compare = useAppSelector(selectCompare);
  const [firstSwiper, setFirstSwiper] = useState<Swiper | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<Swiper | null>(null);

  return (
    <div className="topic">
      <div className="title">
        СРАВНИТЬ <span>{compare?.compareItems.length ?? 0} ТОВАРОВ</span>
      </div>
      <ItemsCompare />
      <div className="main-compare">
        <TopCompare
          setFirstSwiper={setFirstSwiper}
          secondSwiper={secondSwiper}
        />
        <BottomCompare
          setSecondSwiper={setSecondSwiper}
          firstSwiper={firstSwiper}
        />
        <ButtonComapre />
      </div>
    </div>
  );
};

export default BodyCompare;
