import { useAppDispatch, useAppSelector } from "../../../../../../hooks/reduxHooks"
import { buy } from "../../../../../../store2/actions/BasketActions"
import Button2 from "../../../../../UI/button2/Button2"
import cls from './bottomItems.module.scss'

const BottomItems = () => {
    const {sumPrice} = useAppSelector(state=>state.reducer.basket)
    const dispatch = useAppDispatch()

 
  return (
    <div className={cls.bottom}>       
    <div className={cls.submit}>
        <Button2 onClick={()=>dispatch(buy())} className={cls.buttonCart} >Оформить заказ</Button2>
    </div>
    <div className={cls.totalPriceBasket}>
        <div className={cls.left}>Итого:</div>
        <div className={cls.right}>{sumPrice} Р</div>
    </div>
    </div>
  )
}

export default BottomItems