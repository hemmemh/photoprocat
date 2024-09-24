import Fold from '../../../UI/fold/Fold';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass, Controller } from 'swiper';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import './bottomCompare.scss';
import { IInformation } from '../../../../https/productApi';
import { ICompareItem } from '../../../../https/compareApi';
import { selectActiveType, selectCompare, selectFold } from '../../../../store2/selectors/compareSelectors';
import { selectInformations } from '../../../../store2/selectors/catalogSelectors';

const breakPoints = {
  786: {
    spaceBetween: 55,

    slidesPerView: 3,
  },
  982: {
    spaceBetween: 55,
    slidesPerView: 4,
  },
  1213: {
    slidesPerView: 4,
    spaceBetween: 120,
  },
};
const BottomCompare = ({
  setSecondSwiper,
  firstSwiper,
}: {
  setSecondSwiper: (value: SwiperClass) => void;
  firstSwiper: SwiperClass | null;
}) => {
  const activeType = useAppSelector(selectActiveType);
  const fold = useAppSelector(selectFold);
  const informations = useAppSelector(selectInformations);
  const compare = useAppSelector(selectCompare);

  return (
    <div className="bottom">
      <div className="bottom-left">
        {informations.length !== 0 && (
          <Fold foldClass="ggg" value={fold} slice={2}>
            {informations.map((el: IInformation) => (
              <div key={el._id} className="bottom-left__item">
                {el.name}
              </div>
            ))}
          </Fold>
        )}
      </div>
      <div className="item-swiperCompare__bottom-right">
        <Swiper
          slidesPerView={2}
          className="swiperCompare2"
          spaceBetween={9}
          modules={[Controller]}
          onSwiper={(e) => setSecondSwiper(e)}
          controller={{ control: firstSwiper }}
          breakpoints={breakPoints}
        >
          {compare?.compareItems.map((el: ICompareItem) => {
            if (el.product.type.name === activeType) {
              return (
                <SwiperSlide key={el._id}>
                  <div className="swiperCompare2__item item-swiperCompare2">
                    <Fold foldClass="ggg" value={fold} slice={2}>
                      {el.product.information.map((m) => (
                        <div
                          key={m.description}
                          className="item-swiperCompare2__item"
                        >
                          {m.description}
                        </div>
                      ))}
                    </Fold>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BottomCompare;
