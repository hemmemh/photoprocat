import { useRef } from 'react'
import { ItemGrid } from './itemGrid/ItemGrid'
import cls from './gridHome.module.scss'



const items=[
             {image:'1.png',textOne:'Фотокамеры Canon',textTwo:'от 3000 рублей'},
             {image:'2.png',textOne:'Видеокамеры',textTwo:'по 200 рублей в сутки'},
             {image:'3.png',textOne:'Товар недели',textTwo:'всего за 4000 рублей'},
             {image:'4.png',textOne:'Лучшие объективы',textTwo:'по 700 рублей'},
             {image:'5.png',textOne:'Отличные фотокамеры',textTwo:'за 1500 рублей'}
            ]


export const GridHome = () => {
    const ref2 = useRef<HTMLDivElement>(null)
  return (
    <div ref={ref2} className={cls.gridHome}>
    <div className="__container">
      <div className={cls.cover}>
      <div className={cls.body}>
        {items.map(item=><ItemGrid key={item.textOne} image={item.image} textOne={item.textOne} textTwo={item.textTwo}/>)}
      </div>
      </div>
    </div>
   </div>
  )
}

