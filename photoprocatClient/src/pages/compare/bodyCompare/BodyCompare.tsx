import React, { useState } from 'react';
import TopCompare from '../topCompare/TopCompare';
import BottomCompare from '../bottomCompare/BottomCompare';
import ButtonComapre from '../buttonComapre/ButtonComapre';
import ItemsCompare from '../itemsCompare/ItemsCompare';
import './BodyCompare.scss';
import Swiper from 'swiper';
import { selectCompare } from '../../../entities/compareItem/model/compareSelectors';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';

const BodyCompare = () => {
  const compare = useAppSelector(selectCompare);
  const [firstSwiper, setFirstSwiper] = useState<Swiper | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<Swiper | null>(null);

  return (
    <section className="topic">
      <h2 className="title">
        СРАВНИТЬ <span>{compare?.compareItems.length ?? 0} ТОВАРОВ</span>
      </h2>
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
    </section>
  );
};

export default BodyCompare;
