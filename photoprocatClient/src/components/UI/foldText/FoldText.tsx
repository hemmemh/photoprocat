import React, { FC, useEffect, useRef, useState } from 'react'
import './foldText.scss'
interface FooterProps{  
    symbols?:number
    children?:any
    foldClass?:string
    value:boolean
    foldActive:(a:any)=>void
  }
const FoldText: FC<FooterProps>  = ({value,foldActive,children,symbols=10,foldClass='origin'}) => {
 
const bodyRef = useRef<any>()
const bodyAbsolute1 = useRef<any>()
const bodyAbsolute2= useRef<any>()

const slicedTextRef = useRef(children)
useEffect(() => {
  if (symbols < children.length && !value) {
      bodyAbsolute1.current.style.position='absolute'
      bodyAbsolute1.current.style.opacity='0'
  }else{
    foldActive(false)
  }

  
   
}, [])


useEffect(() => {
  if (symbols < children.length && value) {  
    bodyRef.current.style.height = `${bodyRef.current.offsetHeight}px`;
    bodyAbsolute1.current.style.position='inherit'
    bodyAbsolute1.current.style.opacity='1'
    bodyAbsolute2.current.style.position='absolute'
    bodyAbsolute2.current.style.opacity='0'
    bodyRef.current.style.height = `${bodyRef.current.scrollHeight}px`;
   setTimeout(() => {
    bodyRef.current.style.height = `auto`;
   }, 300);
   
  
  }else if (symbols < children.length){
    bodyRef.current.style.height = `${bodyRef.current.scrollHeight}px`;
    bodyAbsolute1.current.style.position='absolute'
    bodyAbsolute1.current.style.opacity='0'
    bodyAbsolute2.current.style.opacity='1'
    bodyAbsolute2.current.style.position='inherit'
    bodyRef.current.style.height = `${bodyAbsolute2.current.offsetHeight}px`;
    setTimeout(() => {
     bodyRef.current.style.height = `auto`;
    }, 300);
  }

}, [value])


  return (
  <div className={`Fold ${foldClass}`}>
    <div ref={bodyRef} className="Fold__body">
        <div ref={bodyAbsolute1} className="Fold__bodyAbsolute">{children}</div>
        {symbols < children.length && <div ref={bodyAbsolute2}className="Fold__bodyAbsolute2"> {children.slice(0,symbols).replace(/\s{1,}$/,'') + '...'}</div>}
        
    </div>
    
  </div>
  
  )
}

export default FoldText