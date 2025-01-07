import { Swiper as SwierClass, FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './sliderGallery.scss';
import { API_URL } from '../../../shared/utils/config';
import { selectProduct } from '../../../entities/productItem/model/productSelectors';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import { IProduct } from '../../../shared/https/productApi';

const SliderGallery = ({
  thumbsSwiper,
}: {
  thumbsSwiper: SwierClass | null;
}) => {
  const product = useAppSelector(selectProduct);
  
  return (
    <div className="slider">
      <Swiper
        spaceBetween={10}
        //navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {JSON.parse(product?.images || '').map((e: IProduct) => (
          <SwiperSlide key={e._id}>
            <div className="sliderItem">
              <img src={`${API_URL}/${product?.name}/${e}`} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderGallery;
