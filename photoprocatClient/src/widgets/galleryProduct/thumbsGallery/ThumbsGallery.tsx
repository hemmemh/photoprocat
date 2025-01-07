import { Swiper as SwiperClass, FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { API_URL } from '../../../shared/utils/config';
import './thumblGallery.scss';
import { selectProduct } from '../../../entities/productItem/model/productSelectors';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import { IProduct } from '../../../shared/https/productApi';

const ThumbsGallery = ({
  setThumbsSwiper,
}: {
  setThumbsSwiper: (value: SwiperClass) => void;
}) => {
  const product = useAppSelector(selectProduct);
  return (
    <div className="thumbs">
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {JSON.parse(product?.images || '').map((e: IProduct) => (
          <SwiperSlide key={e._id}>
            <div className="thumpItem">
              <img src={`${API_URL}/${product?.name}/${e}`} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbsGallery;
