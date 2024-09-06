import cls from './itemPossible.module.scss'
export const ItemPossible = ({image,name}:{image:string,name:string}) => {
  return (
    <div className={cls.item}>
    <div className={cls.cover}>
    <div className={cls.image}>
    <img src={require(`../../../../images/home/underHeader/${image}`)} alt=""/>
    </div>
    <div className={cls.text}>{name}</div>
    </div>
  </div>
  )
}

