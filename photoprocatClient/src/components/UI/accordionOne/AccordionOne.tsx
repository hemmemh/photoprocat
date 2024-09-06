import React, {useCallback, useEffect, useMemo, useRef, useState,FC,ReactNode,cloneElement,ReactElement } from 'react'
import './accordionOne.scss'

interface FooterProps{  
  breakpoint?:number,
  children?:any,
  oneOpen?:boolean,
  setVisibleAccordion?:(a:boolean)=>void,
  accordionClass?:string
}




const AccordionOne: FC<FooterProps> = ({breakpoint=8000,children,oneOpen=false,setVisibleAccordion,accordionClass='origin'}) => {
   const [active, setactive] = useState(false)
   const [visible, setVisible] = useState<number|null>(null)
   const itemRef = useRef<any>()
   const childRef = useRef<any>()
   const itemWidthRef = useRef()
   const footerItems = useRef<any>([])
  const accordRef = useRef<any>()
//при нажатии на один аккордион другой закрывается


//закрытие или открытие всех аккордионов при брейкпоинте
    const ff2 = useCallback(
      () => {
        const clientWidth = window.innerWidth
      if (clientWidth <= breakpoint) {
       
        
        setactive(false)
      }else{
        setactive(true)
      }
      
      },
      [],
    )
    
//определяет открыты или закрыты все аккордионы в начале
    useEffect(() => {
      const clientWidth = window.innerWidth
      
      if (clientWidth <= breakpoint) {
        setactive(false)
      }else{
        setactive(true)
      }


      window.addEventListener('resize',ff2)
      return () => {
        window.removeEventListener('resize',ff2)
      }


     
    }, [])

   const [counter, setcounter] = useState<any>(null)
   const [counter2, setcounter2] = useState<any>(null)
  
    useEffect(() => {
      itemRef.current.style.height = '0px'
      window.addEventListener('resize',gg)
      return () => {
        window.removeEventListener('resize',gg)
      }
  
    }, [])
  
    const gg = ()=>{
 
      
  
    }
    
    useEffect(() => {
      //setVisibleAccordion(false)
      if (active) {


       //itemRef.current.style.boxSizing = 'content-box'
       itemRef.current.style.height =`${itemRef.current.scrollHeight}px`
       setTimeout(() => {
        itemRef.current.style.height= 'auto'
       }, 300);
      }else{
    
        console.log('777777',active);
        
        itemRef.current.style.height =`${itemRef.current.scrollHeight}px`
        setTimeout(() => {
          itemRef.current.style.height = '0px'
        }, 5);

      }
  
       
     }, [active])


     const changeOnClick = ()=>{   
    
      //itemRef.current.style.height= 'auto'
      //itemRef.current.style.boxSizing = 'border-box'
      //itemRef.current.style.height =`${itemRef.current.scrollHeight}px`
     }
const cc = ()=>{
  if (active) {
    
  }
  
}
  return (
    <div ref={accordRef} className={`AccordionOne ${accordionClass}`}>
      <div className='AccordionOne__bodyCover' onTransitionEnd={cc}>
       <div onClick={()=>setactive((prev)=>!prev)}  className={active ? "AccordionOne__button  active _icon-arrow-next active" : "AccordionOne__button _icon-arrow-next"}>{children[0]}</div>
       <div onClick={()=>changeOnClick()} ref={itemRef} className="AccordionOne__body"> 
       <div className="AccordionOne__bodytwo">
       {children[1]}
       </div>
       </div>
      </div>
      </div>
  )
  }

export default AccordionOne