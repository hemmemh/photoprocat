import { useRef,useEffect } from 'react'
import Parallax from '../../UI/parallax/Parallax'
import cls from './headerHome.module.scss'

export const  HeaderHome = () => {
  const headerRef = useRef<any>()
 const firstRef = useRef<any>()
 const secondRef = useRef<any>()
  
  return (
    <div  className={cls.headerHome}>

             <div ref={firstRef} className={cls.image}>
             <img src={require('../../../images/home/header.png')} alt=""/>
             </div>
 
     <div className={cls.container}>
   
      <div ref={secondRef} className={cls.texts}>
        <div className={cls.text}><span className={cls.span2}>АРЕНДА</span> ФОТО <span className={cls.span}>И видео</span></div>
        <div className={cls.text}>И видео</div>
        <div className={cls.text}>Оборудования</div>
      </div>

     </div>
   </div>
  )
}
