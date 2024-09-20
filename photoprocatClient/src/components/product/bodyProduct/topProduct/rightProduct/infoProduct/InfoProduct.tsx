import Navigation from '../../../../../UI/navigation/Navigation';
import './infoProduct.scss';
import Button from '../../../../../UI/button/Button';
import { Rating } from '@mui/material';
import { useAppSelector } from '../../../../../../hooks/reduxHooks';
import Button2 from '../../../../../UI/button2/Button2';
import { ReactComponent as CartSvg } from '../../../../../../images/cart.svg';
import Loader from '../../../../../UI/loader/Loader';
import useItemProduct from '../../../../../../hooks/useItemProduct';

const InfoProduct = () => {
  const { product, raiting, inBasket, loaders, inCompare, inLoves } =
    useAppSelector((state) => state.reducer.product);
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
