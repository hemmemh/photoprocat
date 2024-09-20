import TopProduct from './topProduct/TopProduct';
import RaitingsProduct from './raitingsProduct/RaitingsProduct';
import Navigation from '../../UI/navigation/Navigation';
import { useAppSelector } from '../../../hooks/reduxHooks';
import SpinnerBody from '../../UI/spinnerBody/SpinnerBody';

const BodyProduct = () => {
  const { productLoad } = useAppSelector((state) => state.reducer.product);

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
