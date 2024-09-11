import { Slider } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../../../hooks/reduxHooks"
import { catalogSlice } from "../../../../../store2/reducers/CatalogSlice"
import RadioGroup from "../../../../radioGroup/RadioGroup"
import CheckBoxGroup from "../../../../checkBoxGroup/CheckBoxGroup"
import MyNumber from "../../../../UI/myNumber/MyNumber"


export const FiltrsCatalog = () => {
    const {typeInformation,informations,informationValues,sliderMouseOn} = useAppSelector((state)=>state.reducer.catalog)
    const dispatch = useAppDispatch()
    const {setInformationValues,setsliderMouseOn} = catalogSlice.actions


     
        

    const changeVal = (val:number,type:string,pos:number)=>{
      const value = [...sliderMouseOn[type]]

      
      value[pos] = val
    
      dispatch(setsliderMouseOn({...sliderMouseOn,[type]:value}))
      dispatch(setInformationValues({...informationValues,[type]:value}))
    }
    
    const onChangeCommitted = (value: number | number[], typeName:string)=>{
      dispatch(setInformationValues({...informationValues,[typeName]:value}))
    }


  return (
     <>
       {Object.entries(typeInformation).map((el:any)=>{
  
      
  const type = el[1]
  const typeName = el[0]
  let arr:any[] = []
  arr = [...informations.filter((fil:any)=>fil.name == typeName).map((ee:any)=>ee.description)]
  arr = arr.filter((fil:any,pos:any)=> arr.indexOf(fil) === pos)

   if (type == 'radio') {
      return(
        <div key={typeName} className="GroupCover">
          <div className="GroupCover__name">{typeName}</div>
          <RadioGroup typeName={typeName} arr={arr}/>
        </div>
        

      )
    
     
       
    
   }
   if (type == 'check') {
    return (
      <div key={typeName} className="GroupCover">
      <div className="GroupCover__name">{typeName}</div>
      <CheckBoxGroup  typeName={typeName} arr={arr}/>
      
   </div>

    )

    
    
    }
    if (type == 'slider') {
       if (arr.length === 1 ) {
         arr = [0,arr[0]]
       }
        return <div key={typeName} className="GroupCover" >
        <div className="right-main-catalog__slider  slider-right-main-catalog ">
        <div className='GroupCover__name'>{typeName}</div>
        <div className="right-main-catalog__slider slider-right-main-catalog">
        <Slider 
               valueLabelDisplay="auto"
                value={sliderMouseOn[typeName]}
                onChange={(event: Event, value: number | number[], activeThumb: number)=>dispatch(setsliderMouseOn({...sliderMouseOn,[typeName]:value}))}
                onChangeCommitted={(event: Event | React.SyntheticEvent<Element, Event>, value: number | number[])=>onChangeCommitted(value,typeName)}
                min={Number(arr.sort((a:any,b:any)=>a-b)[0])}
                max={Number(arr.sort((a:any,b:any)=>b-a)[0])}
        />
        <div className="slider-right-main-catalog__sliderInputs">
        <MyNumber 
            min={Number(arr.sort((a:any,b:any)=>a-b)[0])} 
            max={informationValues[typeName][1]} 
            value={sliderMouseOn[typeName][0]}
            setValue={(e:any)=>changeVal(e,typeName,0)}
            className="slider-right-main-catalog__sliderInput"
            />
      
        <div className="slider-right-main-catalog__d">-</div>
        
        <MyNumber 
            min={informationValues[typeName][0]} 
            max={Number(arr.sort((a:any,b:any)=>b-a)[0])} 
            value={sliderMouseOn[typeName][1]}
            setValue={(e:any)=>changeVal(e,typeName,1)}
            className="slider-right-main-catalog__sliderInput"
            />
        
        </div>
        </div>
        </div>
        </div>
      
        
}
  
})}
     </>
  )
}

