import React, { FC, memo, useCallback, useState } from 'react'
import './toggle.scss'
interface FooterProps{  
    breakpoint?:number,
    children?:any,
    oneOpen?:boolean,
    accordionClass?:string
    toggleClass?:string
    value:any
    change:(e:any)=>void
    ripple?:boolean
    rippleClass?:string
  }
const Toggle:FC<FooterProps> = memo(({children,toggleClass='origin',value,change,ripple=true,rippleClass='origin'}) => {


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
 
      e.target.appendChild(circle);
      const diameter = Math.max(e.target.clientWidth, e.target.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - radius - e.target.getBoundingClientRect().left}px`;
      circle.style.top = `${e.clientY - radius- e.target.getBoundingClientRect().top }px`;
      circle.classList.add(`ripple`); 
      circle.classList.add(rippleClass); 
    }
      

  }

     const changeToggle =(i:any)=>{
    
        console.log(i,'33335',value);
        
        change(i)
     }
       
      
  return (
  <div className={`Toggle ${toggleClass}`}>
    {children.map((e:any,i:any)=>
     <div onMouseDown={e=>rippleEffect(e)} key={ Math.random().toString(36).substring(2,7)} onClick={()=>changeToggle(i)}  className={value === i  ? "Toggle__item active" : "Toggle__item"}>
        {e}</div>
     )}
   </div>
  )
})

export default Toggle