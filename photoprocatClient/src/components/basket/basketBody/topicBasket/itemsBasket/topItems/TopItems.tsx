import './topItems.scss'
const items = ['Фото','Название','Цена','Количество','Итого']

const TopItems = () => {
  return (
    <div className="items-basket__top top-basket">
        {items.map(item=> <div key={item} className="top-basket__item">{item}</div>)}
    </div>
  )
}

export default TopItems