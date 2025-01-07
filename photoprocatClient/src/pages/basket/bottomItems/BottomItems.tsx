
import { buy } from '../../../entities/basketProduct/model/BasketActions';
import { selectSumPrice } from '../../../entities/basketProduct/model/basketSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';
import Button2 from '../../../shared/UI/button2/Button2';
import cls from './bottomItems.module.scss';

const BottomItems = () => {
  const dispatch = useAppDispatch();
  const sumPrice = useAppSelector(selectSumPrice)
  return (
    <div className={cls.bottom}>
      <div className={cls.submit}>
        <Button2 onClick={() => dispatch(buy())} className={cls.buttonCart}>
          Оформить заказ
        </Button2>
      </div>
      <div className={cls.totalPriceBasket}>
        <div className={cls.left}>Итого:</div>
        <div className={cls.right}>{sumPrice} Р</div>
      </div>
    </div>
  );
};

export default BottomItems;
