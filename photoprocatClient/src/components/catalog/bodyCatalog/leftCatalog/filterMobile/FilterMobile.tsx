import {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks'
import AccordionOne from '../../../../UI/accordionOne/AccordionOne'
import AccordionUser from '../../../../UI/accordionUser/AccordionUser'
import AccordionUserItem from '../../../../UI/accordionUser/AccordionUserItem'
import { catalogSlice } from '../../../../../store2/reducers/CatalogSlice'

import CheckBox from '../../../../UI/checkBox/CheckBox'
import { Slider } from '@mui/material'
import SliderSort from '../../../../sliderSort/SliderSort'
import PriceSort from '../../../../priceSort/PriceSort'
import RadioGroup from '../../../../radioGroup/RadioGroup'
import CheckBoxGroup from '../../../../checkBoxGroup/CheckBoxGroup'
import cls from'./filterMobile.module.scss'
import Button2 from '../../../../UI/button2/Button2'

export const FilterMobile = () => {
    const [VisibleAccordionFiltr, setVisibleAccordionFiltr] = useState(false)
    const {typeInformation,informations,informationValues,sliderMouseOn,priceRange,minMaxPrice} = useAppSelector((state)=>state.reducer.catalog)
    const dispatch = useAppDispatch()
    const {setInformationValues,setsliderMouseOn,setPriceRange} = catalogSlice.actions

    const changeVal = (val:any,type:any,pos:any)=>{
      //setsliderMouseOn({...sliderMouseOn,[type]:sliderMouseOn[type].map((e:any,i:any)=>i === pos ? val : e )})

  }

  return (
    <div className={cls.filterAccordion}>
            <AccordionUser >
                <AccordionUserItem >
                <Button2   className={cls.sortButton}>Фильтры</Button2>
                 <AccordionUser VisibleAll={VisibleAccordionFiltr} >
                {Object.entries(typeInformation).map((el:any)=>{ 
            const type = el[1]
            const typeName = el[0]
            let arr:any = []
            arr = [...informations.filter((fil:any)=>fil.name == typeName).map((ee:any)=>ee.description)]
            arr = arr.filter((fil:any,pos:any)=> arr.indexOf(fil) === pos)

            
            if (type == 'radio') {
            return  ( 
                
                <AccordionUserItem key={typeName}>
                       <Button2   className={cls.sortButton}>{typeName}</Button2>
                   <RadioGroup typeName={typeName} arr={arr}/>
                </AccordionUserItem>
                )
            }


            if (type == 'check') {
            return  (
                <AccordionUserItem key={typeName}>
                           <Button2   className={cls.sortButton}>{typeName}</Button2>
                        <CheckBoxGroup  typeName={typeName} arr={arr}/>
                </AccordionUserItem>
            )
            }


            if (type == 'slider') {
            return (
                <AccordionUserItem key={typeName}>
                                 <Button2   className={cls.sortButton}>{typeName}</Button2>
                                <SliderSort typeName={typeName} arr={arr}/>
                </AccordionUserItem>
            )
            }
                 })}
                <AccordionUserItem >
                <Button2   className={cls.sortButton}>цена</Button2>
                <PriceSort/>
                </AccordionUserItem>           
                 </AccordionUser>
                </AccordionUserItem>
            </AccordionUser>
    </div>
  )
}

