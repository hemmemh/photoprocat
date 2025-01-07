import Navigation from '../../../shared/UI/navigation/Navigation';
import './infoProduct.scss';
import Button from '../../../shared/UI/button/Button';
import { Rating } from '@mui/material';
import Button2 from '../../../shared/UI/button2/Button2';
import { ReactComponent as CartSvg } from '../../../shared/images/cart.svg';
import Loader from '../../../shared/UI/loader/Loader';
import { selectInBasket, selectInCompare, selectInLoves, selectLoaders, selectProduct, selectRaiting } from '../../../entities/productItem/model/productSelectors';
import useItemProduct from '../../../shared/hooks/useItemProduct';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';

const InfoProduct = () => {
  const product = useAppSelector(selectProduct);
  const raiting = useAppSelector(selectRaiting);
  const inBasket = useAppSelector(selectInBasket);
  const loaders = useAppSelector(selectLoaders);
  const inCompare = useAppSelector(selectInCompare);
  const inLoves = useAppSelector(selectInLoves);
  const { addToBasket } = useItemProduct({
    inBasket,
    inCompare,
    inLoves,
    data: product,
  });

  return (
    <div className="main-product__info info-product">
      <Navigation navigationClass="product _d2">
        Главная / {product?.type.name} / {product?.brand.name} / {product?.name}
      </Navigation>
      <div className="brand">{product?.brand.name}</div>
      <div className="name">{product?.name}</div>
      <div className="actions">
        <Button ripple={true} className="product-1 dr">
          В наличии
        </Button>
        <Button2
          onClick={addToBasket}
          ripple={true}
          className={inBasket ? 'buttonCart  active ' : 'buttonCart'}
        >
          {!loaders.basket ? (
            <Loader className={'basketLoaderProduct'} />
          ) : (
            <CartSvg />
          )}
          {inBasket ? 'В корзине' : 'В корзину'}
        </Button2>
      </div>
      <div className="raiting">
        <Rating value={raiting} readOnly />
      </div>
    </div>
  );
};

export default InfoProduct;
