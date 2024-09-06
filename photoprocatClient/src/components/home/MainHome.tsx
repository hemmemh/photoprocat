import { useRef } from 'react'
import { GridHome } from "./gridHome/GridHome"
import { HeaderHome } from "./headerHome/HeaderHome"
import { PossibleHome } from "./possibleHome/PossibleHome"
import { SlidesHome } from "./slidesHome/SlidesHome"
import { WorkHome } from "./workHome/WorkHome"
import cls from './home.module.scss'


export const MainHome = () => {

  return (
    <div  className={cls.Home}>
        <HeaderHome/>
        <PossibleHome/>
        <SlidesHome/>
        <GridHome/>
        <WorkHome/>
    </div>
  )
}

