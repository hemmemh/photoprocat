import { Slider } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { catalogSlice } from '../../store2/reducers/CatalogSlice'
import './sliderSort.scss'
const SliderSort = ({typeName,arr}:{typeName:string,arr:any[]}) => {

    const {informationValues,sliderMouseOn} = useAppSelector((state)=>state.reducer.catalog)
    const dispatch = useAppDispatch()
    const {setInformationValues,setsliderMouseOn} = catalogSlice.actions
    
    const changeVal = (val:any,type:any,pos:any)=>{
        //setsliderMouseOn({...sliderMouseOn,[type]:sliderMouseOn[type].map((e:any,i:any)=>i === pos ? val : e )})
  
    }

  return (
    <div className="right-main-catalog__slider slider-right-main-catalog">
    <Slider 
            key={typeName}
            value={sliderMouseOn[typeName]}
            onChange={(event: Event, value: number | number[], activeThumb: number)=>dispatch(setsliderMouseOn({...sliderMouseOn,[typeName]:value}))}
            onChangeCommitted={(event: Event | React.SyntheticEvent<Element, Event>, value: number | number[])=>dispatch(setInformationValues({...informationValues,[typeName]:value}))}
            min={Number(arr.sort((a:any,b:any)=>a-b)[0])}
            max={Number(arr.sort((a:any,b:any)=>b-a)[0])}
    />
    <div className="slider-right-main-catalog__sliderInputs">
    <input type='text' value={`От ${sliderMouseOn[typeName][0]}`} onChange={(e:any)=>changeVal(e.target.value,typeName,0)} className="slider-right-main-catalog__sliderInput"></input>
    <div className="slider-right-main-catalog__d">-</div>
    
    <input type='text' value={`До ${sliderMouseOn[typeName][1]}`} onChange={(e:any)=>changeVal(e.target.value,typeName,1)}  className="slider-right-main-catalog__sliderInput"></input>
    
    </div>
    </div>
  )
}

export default SliderSort