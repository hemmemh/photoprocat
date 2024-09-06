import React, { useEffect, useState } from 'react'
import cls from './number.module.scss'
type NumberType = {
    className?:string
    value:number
    setValue:(e:any)=>void
    placeholder?:string | undefined
    min?:number
    max?:number
}

const MyNumber = ({className,value,setValue,placeholder='',min=0,max=100}:NumberType) => {
  const [num, setNum] = useState(value)
  useEffect(() => {
    setNum(value)
  
  }, [value])
  
    const change = (e:any)=>{
      let num = +e
  if (+e < min) {
    num = min
  }
  if (+e > max) {
    num = max
  }   
  setValue(num)
       }

       const keyDone = (e:any)=>{
         if (e.keyCode===13) {
          change(e.target.value)
         }
       }


  return (
    <div className={`${cls.MyNumber} ${className}`}>
      <input  type="number"  onBlur={(e)=>change(e.target.value)} onKeyDown={keyDone} onChange={(e:any)=>setNum(e.target.value)}  value={num} placeholder={placeholder}/>
    </div>
  )
}

export default MyNumber