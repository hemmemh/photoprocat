import { Rating } from '@mui/material';
import { FC, useMemo, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import './productItem.scss';
import { ReactComponent as CompareSvg } from '../../images/compare.svg';
import { ReactComponent as StarSvg } from '../../images/star.svg';
import { ReactComponent as CartSvg } from '../../images/cart.svg';
import useItemProduct from '../../hooks/useItemProduct';
import useCheckMobileScreen from '../../hooks/DetectMobileHook';
import { API_URL } from '../../utils/config';
import { PRODUCT_ROUTE } from '../../app/config/routs';
import Button2 from '../../components/UI/button2/Button2';
import Loader from '../../components/UI/loader/Loader';
import { IProduct, IRating } from '../../https/productApi';

interface button {
  data: IProduct;
  inBasket: boolean;
  inCompare: boolean;
  inLoves: boolean;
  className?: string;
}

const ProductItem: FC<button> = ({
  data,
  inBasket = false,
  inCompare = false,
  inLoves = false,
  className = '',
}) => {
  const navigate = useNavigate();
  const {
    addToBasket,
    addToCompare,
    addToLoves,
    inBasketSnippet,
    inCompareSnippet,
    inLovesSnippet,
    loaders,
  } = useItemProduct({ inBasket, inCompare, inLoves, data });
  const mobile = useCheckMobileScreen(767.98, 479.98);
  const mobile2 = useCheckMobileScreen(479.98);

  const ratingSize = useMemo(() => {
    if (!className) {
      return mobile ? 'small' : 'large';
    }

    return mobile2 ? 'small' : 'large';
  }, [mobile, mobile2]);

  return (
    <div className={`mainCatalog__item ${className}`}>
      <div className="slidesHome__slide slideHome">
        <div className="slideHome__body">
          <div className="slideHome__image">
            <div className="slideHome__imageCover">
              <img
                src={`${API_URL}/${data.name}/${JSON.parse(data.images)[0]}`}
                alt=""
              />
            </div>
          </div>
          <div className="slideHome__name">{data.name}</div>
          <div className="slideHome__brand">{data.type.name}</div>
          <div className="slideHome__price"> ${data.price} </div>

          <div className="slideHome__rating">
            <Rating
              size={ratingSize}
              name="disabled"
              value={
                data.ratings.reduce(
                  (accumulator: number, currentValue: IRating) =>
                    accumulator + currentValue.rate,
                  0
                ) / data.ratings.length
              }
              disabled
            />
          </div>
          <div className="slideHome__actions">
            <Button2
              onClick={() => navigate(`${PRODUCT_ROUTE}/${data._id}`)}
              className="productCard"
            >
              Подробнее
            </Button2>
            <Button2
              onClick={addToBasket}
              className={
                inBasketSnippet
                  ? 'productCard _cart active'
                  : 'productCard _cart'
              }
            >
              {!loaders.basket ? (
                <Loader
                  className={
                    inBasketSnippet ? 'basketLoader _d' : 'basketLoader'
                  }
                />
              ) : (
                <CartSvg />
              )}
            </Button2>
          </div>
          <div className="slideHome__business businessHome">
            {loaders.compare ? (
              <CompareSvg
                onClick={addToCompare}
                className={
                  inCompareSnippet
                    ? 'businessHome__item active'
                    : 'businessHome__item'
                }
              />
            ) : (
              <Loader />
            )}
            {loaders.love ? (
              <StarSvg
                onClick={addToLoves}
                className={
                  inLovesSnippet
                    ? 'businessHome__item active'
                    : 'businessHome__item'
                }
              />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductItem);
