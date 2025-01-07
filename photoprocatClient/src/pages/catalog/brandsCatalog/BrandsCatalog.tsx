import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { API_URL } from '../../../shared/utils/config';
import ProductSpoiler from '../../../shared/UI/productSpoiler/ProductSpoiler';
import './brandsCatalog.scss';
import Button2 from '../../../shared/UI/button2/Button2';
import { memo } from 'react';
import { chooseBrand } from '../../../entities/catalog/model/CatalogActions';
import { selectBrands, selectBrandsLoad, selectCheckedBrands } from '../../../entities/catalog/model/catalogSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';
import MobileBrands from '../mobileBrands/MobileBrands';

const breakpoints = {
  991.98: {
    slidesPerView: 6,
    spaceBetween: 30,
  },
};

const navigation = {
  prevEl: '.slider-brand-catalog__prevButton',
  nextEl: '.slider-brand-catalog__nextButton',
};

const BrandsCatalog = () => {

  const brandsLoad = useAppSelector(selectBrandsLoad);
const brands = useAppSelector(selectBrands);
const checkedBrands = useAppSelector(selectCheckedBrands);

  const dispatch = useAppDispatch();

  return (
    <section className="Catalog__brands brandsCatalog">
      <h2 className="brandsCatalog__title">
        Можно выбрать несколько брендов
      </h2>
      {brandsLoad && (
        <div className="brandsCatalog__slider slider-brand-catalog">
          <div className="slider-brand-catalog__sliderCover">
            <Swiper
              className="slider-brand-catalog__swiper"
              modules={[Navigation]}
              breakpoints={breakpoints}
              navigation={navigation}
              spaceBetween={20}
              slidesPerView={4}
            >
              {brands.map((e, i) => (
                <SwiperSlide key={e.name}>
                  <div
                    onClick={() => dispatch(chooseBrand(e._id))}
                    className={
                      checkedBrands.includes(e._id)
                        ? 'slider-brand-catalog__item item-slider-brand-catalog active'
                        : 'slider-brand-catalog__item item-slider-brand-catalog'
                    }
                  >
                    <div className="item-slider-brand-catalog__boxshadow">
                      <div className="item-slider-brand-catalog__cover">
                        <div className="item-slider-brand-catalog__absolute">
                          <div className="item-slider-brand-catalog__image">
                            <img
                              src={`${API_URL}/brands/${brands[i].image}`}
                              alt=""
                            />
                          </div>
                          <div className="item-slider-brand-catalog__check _icon-check"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="slider-brand-catalog__navigation">
            <div className="slider-brand-catalog__prevButton _icon-arrow-bottom"></div>
            <div className="slider-brand-catalog__nextButton _icon-arrow-bottom"></div>
          </div>
          <MobileBrands brands={brands} checkedBrands={checkedBrands} />
        </div>
      )}
    </section>
  );
};

export default memo(BrandsCatalog);
