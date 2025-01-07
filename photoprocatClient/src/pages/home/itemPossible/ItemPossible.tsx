import { FC } from 'react';
import cls from './itemPossible.module.scss';

interface ItemPossible {
  image: string;
  name: string;
}
export const ItemPossible:FC<ItemPossible> = ({image,name}) => {
  return (
    <div className={cls.item}>
      <div className={cls.cover}>
        <div className={cls.image}>
          <img
            src={require(`../../../shared/images/home/underHeader/${image}`)}
            alt=""
          />
        </div>
        <div className={cls.text}>{name}</div>
      </div>
    </div>
  );
};
