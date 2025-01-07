import { API_URL } from '../../../shared/utils/config';
import ProductSpoiler from '../../../shared/UI/productSpoiler/ProductSpoiler';
import './mobileBrands.scss';
import Button2 from '../../../shared/UI/button2/Button2';
import { FC, memo } from 'react';
import { chooseBrand } from '../../../entities/catalog/model/CatalogActions';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';
import { IBrand } from '../../../shared/https/brandsApi';


interface MobileBrands {
  brands:IBrand[]
  checkedBrands:string[]
}

const MobileBrands:FC<MobileBrands> = ({brands, checkedBrands}) => {
  const dispatch = useAppDispatch();

  return (
          <div className="slider-brand-catalog__spoiler">
            <ProductSpoiler changeName={false} className="brand">
              <Button2 className="buttonCart _width">Бренды</Button2>
              <div className="mobile-item-slider-brand-catalog__cover">
                {brands.map((e, i) => (
                  <div
                    key={e.name}
                    onClick={() => dispatch(chooseBrand(e._id))}
                    className={
                      checkedBrands.includes(e._id)
                        ? 'slider-brand-catalog__item-mobile mobile-item-slider-brand-catalog active'
                        : 'slider-brand-catalog__item-mobile mobile-item-slider-brand-catalog'
                    }
                  >
                    <div className="mobile-item-slider-brand-catalog__image">
                      <img
                        src={`${API_URL}/brands/${brands[i].image}`}
                        alt=""
                      />
                    </div>
                    <div className="mobile-item-slider-brand-catalog__check _icon-check"></div>
                  </div>
                ))}
              </div>
            </ProductSpoiler>
          </div>
  );
};

export default memo(MobileBrands);
