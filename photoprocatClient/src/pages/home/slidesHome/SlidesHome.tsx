import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SpinnerBody from '../../../shared/UI/spinnerBody/SpinnerBody';
import cls from './slidesHome.module.scss';
import { putProductsInSlides } from '../../../entities/catalog/model/CatalogActions';
import ProductItem from '../../../entities/productItem/ui/ProductItem';
import { selectProducts } from '../../../entities/catalog/model/catalogSelectors';
import { selectBasket } from '../../../entities/basketProduct/model/basketSelectors';
import { selectLoves } from '../../../entities/loves/model/loveSelectors';
import { selectCompare } from '../../../entities/compareItem/model/compareSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';

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
    <section className={cls.slidesHome}>
      <div className="__container">
        <h2 className={cls.header}>Популярные товары</h2>
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
    </section>
  );
};
