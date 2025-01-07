import TopProduct from '../topProduct/TopProduct';
import RaitingsProduct from '../raitingsProduct/RaitingsProduct';
import Navigation from '../../../shared/UI/navigation/Navigation';
import SpinnerBody from '../../../shared/UI/spinnerBody/SpinnerBody';
import { selectProductLoad } from '../../../entities/productItem/model/productSelectors';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';

const BodyProduct = () => {
  const productLoad = useAppSelector(selectProductLoad);

  return (
    <>
      {productLoad ? (
        <div className="Product__container">
          <Navigation navigationClass="product _d">
            Главная / Фотокамеры / Canon / 5D Mark IV body
          </Navigation>
          <TopProduct />
          <RaitingsProduct />
        </div>
      ) : (
        <SpinnerBody />
      )}
    </>
  );
};

export default BodyProduct;
