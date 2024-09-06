import React from 'react'
import CheckBox from '../UI/checkBox/CheckBox'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { catalogSlice } from '../../store2/reducers/CatalogSlice'
import './checkBoxGroup.scss'
const CheckBoxGroup = ({arr,typeName}:{arr:any[],typeName:string}) => {

    const {informationValues} = useAppSelector((state)=>state.reducer.catalog)
    const dispatch = useAppDispatch()
    const {setInformationValues} = catalogSlice.actions

  return (
    <div className="CheckBoxGroup">
    {arr.map((el:string)=>
    <CheckBox 
    key={el}
    value={informationValues[typeName]} 
    change={(ru)=>dispatch(setInformationValues({...informationValues,[typeName]:ru}))}  
    id={el}
    className="checkBoxFiltr">
                <div className={'CheckBox__check'}></div>
                <div className={'CheckBox__label'}>{el}</div>
    </CheckBox>
    )}
   </div>
  )
}

export default CheckBoxGroup