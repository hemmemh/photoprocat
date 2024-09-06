import React from 'react'
import LeftCompare from './leftCompare/LeftCompare'
import TopSlider from './topSlider/TopSlider'

const TopCompare = ({setFirstSwiper,secondSwiper}:{setFirstSwiper:(a:any)=>void,secondSwiper:any}) => {
  return (
    <div className="main-compare__top">
        <LeftCompare/>
        <TopSlider setFirstSwiper={setFirstSwiper} secondSwiper={secondSwiper}/>
</div>
  )
}

export default TopCompare