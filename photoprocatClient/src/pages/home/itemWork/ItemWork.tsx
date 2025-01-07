import { FC } from 'react';
import './itemWork.scss';

interface ItemWork {
  name: string;
  locale: string;
  link: string;
}

export const ItemWork:FC<ItemWork> = ({name,locale,link}) => {
  return (
    <div className="workHome__item itemWorkHome">
      <div className="itemWorkHome__name _icon-mail">{name}</div>
      <div className="itemWorkHome__text">{locale}</div>
      <a href="URL" className="itemWorkHome__link">
        {link}
      </a>
    </div>
  );
};
