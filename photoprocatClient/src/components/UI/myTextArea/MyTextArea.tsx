import React, { useRef, useState } from 'react'
import './myTextArea.scss'
type MyTextArea = {
    value:string
    setValue:(e:string)=>void
    placeholder?:string | undefined
    className?:string
}
const MyTextArea = ({value,setValue,placeholder='',className=''}:MyTextArea) => {
const textAreaRef = useRef<HTMLTextAreaElement>(null)
const [focus, setFocus] = useState(false)
    const onFocus = ()=>{
        setFocus(true)
      
    }


    const onBlur = ()=>{
         setFocus(false)
    }

    
   const change = (e:any)=>{
    textAreaRef.current && (textAreaRef.current.style.height = "auto")
    textAreaRef.current && (textAreaRef.current.style.height = `${e.target.scrollHeight}px`)
    setValue(e.target.value)
   }


  return (
    <textarea 
        ref={textAreaRef}  
        rows={1} 
        onFocus={onFocus} 
        onBlur={onBlur} 
        className={`MyTextArea ${className} ${focus ? 'active' : ''}`} 
        value={value}  
        onChange={change} 
        placeholder={placeholder}>
    </textarea>
  )
}

export default MyTextArea