import { ItemPossible } from "./itemPossible/ItemPossible"
import cls from './possibleHome.module.scss'

 const items=[
  {image:'1.png',name:'Самый большой выбор техники'},
  {image:'2.png',name:'Быстрое оформление заказа'},
  {image:'3.png',name:'Можно забрать заказ в пункте выдачи'},
  {image:'4.png',name:'Доставка в любую точку Москвы'},
  {image:'5.png',name:'Оплата картой и наличными'},
]
export const PossibleHome = () => {

  return (
    <div className={cls.possibileHome}>
    <div className="__container">
      <div className={cls.body}>
        {items.map(item=><ItemPossible key={item.name} image={item.image} name={item.name}/>)}
      </div>
    </div>
   </div>
  )
}

