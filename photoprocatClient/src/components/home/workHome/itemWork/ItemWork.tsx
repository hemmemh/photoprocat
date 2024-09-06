import React from 'react'
import './itemWork.scss'
export const ItemWork = ({name,locale,link}:{name:string,locale:string,link:string}) => {
  return (
    <div className="workHome__item itemWorkHome">
    <div className="itemWorkHome__name _icon-mail">{name}</div>
    <div className="itemWorkHome__text">{locale}</div>
    <a href="URL" className="itemWorkHome__link">{link}</a>
</div>
  )
}

