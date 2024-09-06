import React, { FC, useRef, useState } from 'react'
import { forEachChild } from 'typescript'
import './button.scss'
interface button{
   children?:any
   className?:String
   classNameCover?:String
   ripple?:boolean
   rippleClass?:string
   onClick?:(e:any)=>void
}
const Button:FC<button> = ({onClick=()=>{},children,className='origin',classNameCover='origin',ripple=true ,rippleClass='origin'}) => {
const buttonRef = useRef<any>()
  const rippleEffect=(e:any)=>{
    if (ripple) {
      e.stopPropagation()
      const circle = document.createElement("span");
      e.target.addEventListener("mouseup",()=>{
        circle.style.opacity='0'
        circle.addEventListener("transitionend",()=>{
          circle.remove()
        })
      })
      e.target.addEventListener("mouseout",()=>{
        circle.style.opacity='0'
        circle.addEventListener("transitionend",()=>{
          circle.remove()
        })
      })
     console.log(e.clientX,e.clientY,'yyyyyj');
     
      e.target.appendChild(circle);
      const diameter = Math.max(e.target.clientWidth, e.target.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - radius - buttonRef.current.getBoundingClientRect().left}px`;
      circle.style.top = `${e.clientY - radius- buttonRef.current.getBoundingClientRect().top }px`;
      circle.classList.add(`ripple`); 
      circle.classList.add(rippleClass); 
    }
      

  }



  return (
    <button ref={buttonRef} onClick={onClick} onMouseDown={e=>rippleEffect(e)} className={`Button ${className}`}>
        <div className="Button__cover">
            <div className={`Button__absolute ${classNameCover}`}>{children}</div>
            
        </div>
        
    </button>
  )
}

export default Button