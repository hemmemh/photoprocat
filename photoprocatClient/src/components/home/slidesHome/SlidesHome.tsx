import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import SpinnerBody from '../../UI/spinnerBody/SpinnerBody';
import cls from './slidesHome.module.scss';
import { putProductsInSlides } from '../../../store2/actions/CatalogActions';
import ProductItem from '../../../entities/productItem/ProductItem';
import { selectProducts } from '../../../store2/selectors/catalogSelectors';
import { selectBasket } from '../../../store2/selectors/basketSelectors';
import { selectLoves } from '../../../store2/selectors/loveSelectors';
import { selectCompare } from '../../../store2/selectors/compareSelectors';

const navigation = {
  prevEl: '.slidesHome__prevButton',
  nextEl: '.slidesHome__nextButton',
};

const breakpoints = {
  479.98: {
    slidesPerView: 2.4,
    spaceBetween: 30,
  },
  550: {
    slidesPerView: 3.2,
    spaceBetween: 15,
  },
};

export const SlidesHome = () => {
  const [loader, setloader] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const basket = useAppSelector(selectBasket);
  const loves = useAppSelector(selectLoves);
  const compare = useAppSelector(selectCompare);

  useEffect(() => {
    dispatch(putProductsInSlides()).then(() => {
      setloader(true);
    });
  }, []);

  return (
    <div className={cls.slidesHome}>
      <div className="__container">
        <div className={cls.header}>Популярные товары</div>
        {loader ? (
          <div className={cls.sliderCover}>
            <Swiper
              className="HomeSlider"
              modules={[Navigation]}
              navigation={navigation}
              breakpoints={breakpoints}
              spaceBetween={10}
              slidesPerView={1.4}
            >
              {products.responce.map((ell) => (
                <SwiperSlide key={ell._id}>
                  <ProductItem
                    key={ell._id}
                    data={ell}
                    inCompare={
                      compare?.compareItems?.find(
                        (el) => el.product?._id == ell._id
                      )
                        ? true
                        : false
                    }
                    inBasket={
                      basket?.basketItems?.find(
                        (el) => el.product?._id == ell._id
                      )
                        ? true
                        : false
                    }
                    inLoves={
                      loves?.lovesItems?.find(
                        (el) => el.product?._id == ell._id
                      )
                        ? true
                        : false
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <SpinnerBody className="homeSpinner" />
        )}
      </div>
    </div>
  );
};
