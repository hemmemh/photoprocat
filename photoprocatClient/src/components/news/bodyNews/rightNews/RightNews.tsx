import React from 'react'
import ItemNews from './itemNews/ItemNews'

const RightNews = () => {
  return (
    <div className="News__right right-news">
        <div className="right-news__title">Популярные товары</div>
        <div className="right-news__items">
            <ItemNews/>
            <ItemNews/>    
        </div>
        
    </div>
  )
}

export default RightNews