import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@mui/material';
import { productSlice } from '../../../entities/productItem/model/ProductSlice';
import './ratingsProduct.scss';
import Button2 from '../../../shared/UI/button2/Button2';
import { selectProduct } from '../../../entities/productItem/model/productSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';

const breakpoints = {
  500: {
    slidesPerView: 1.8,
    spaceBetween: 10,
  },
  700: {
    slidesPerView: 2.8,
    spaceBetween: 10,
  },
  991.98: {
    slidesPerView: 3.8,
    spaceBetween: 20,
  },
};
const RaitingsProduct = () => {
  const product = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();
  const { setModal } = productSlice.actions;

  return (
    <section className="Product__raitings raitings-product">
      <h2 className="raitings-product__title">Отзывы</h2>

      <div className="raitings-product__button">
        <Button2
          onClick={() => dispatch(setModal(true))}
          className="buttonCart"
        >
          Написать отзыв
        </Button2>
      </div>
      <div className="raitings-product__body">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          freeMode={true}
          breakpoints={breakpoints}
        >
          {product?.ratings.map((el) => (
            <SwiperSlide key={el._id}>
              <div className="raitings-product__item-cover">
                <div className="raitings-product__item item-raitings">
                  <div className="item-raitings__name">
                    {el.name} {el.sername}
                  </div>
                  <div className="item-raitings__raiting">
                    <Rating readOnly value={el.rate} />
                  </div>
                  <p className="item-raitings__text">{el.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RaitingsProduct;
