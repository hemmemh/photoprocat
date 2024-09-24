import { useEffect } from 'react';
import { Controller, Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import './topSlider.scss';
import CompareItem from '../../../../entities/compareItem/compareItem';
import { ICompareItem } from '../../../../https/compareApi';
import { selectActiveType, selectCompare } from '../../../../store2/selectors/compareSelectors';

const breakpoints = {
  786: {
    spaceBetween: 55,
    slidesPerView: 3,
  },
  982: {
    spaceBetween: 50,
    slidesPerView: 4,
  },
  1213: {
    slidesPerView: 4,
    spaceBetween: 118,
  },
};
const TopSlider = ({
  setFirstSwiper,
  secondSwiper,
}: {
  setFirstSwiper: (value: SwiperClass) => void;
  secondSwiper: SwiperClass | null;
}) => {
  const activeType = useAppSelector(selectActiveType);
  const compare = useAppSelector(selectCompare);

  return (
    <div className="top-slider">
      <div className="top-slider-cover">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          className="swiperCompare"
          modules={[Controller]}
          onSwiper={(e) => setFirstSwiper(e)}
          controller={{ control: secondSwiper }}
          breakpoints={breakpoints}
        >
          {compare?.compareItems.map((el: ICompareItem) => {
            if (el.product.type.name === activeType) {
              return (
                <SwiperSlide key={el._id}>
                  <CompareItem el={el} />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSlider;
