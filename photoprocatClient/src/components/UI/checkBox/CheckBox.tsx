import React, { useCallback, useEffect, useRef, useState,FC,ReactNode } from 'react'
import './checkBox.scss';
interface FooterProps{  
 
   children:React.ReactNode
    value:string[]
    change:(e:any)=>void,
    className?:string,
    id:string
  }
const CheckBox: FC<FooterProps> = ({value,change,className='',id,children}) => {
   

  
    const setItem = (i:string)=>{
      console.log(value);
      
      if (value.includes(i)) {
        change([...value.filter((e:any)=>e!==i)])
        change([...value.filter((e:any)=>e!==i)])
      }else{
        change([...value, i])
        change([...value, i])
      } 
    }
  return (
    <div onClick={()=>setItem(id)}  className={value?.includes(id)  ? `CheckBox ${className} active` : `CheckBox__item ${className}`}>
      {children} 
    </div>
  )
}

export default CheckBox