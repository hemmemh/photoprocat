import React, { useCallback, useEffect, useRef, useState,FC,ReactNode } from 'react'
import './accordionUser.scss'
interface FooterItemProps{  
  active?:boolean,
  activeItem?:boolean,
  visible?:boolean,
  children?:any,
  accordion?:any,
  controll?:boolean
  lock?:boolean
}

const AccordionUserItem:FC<FooterItemProps> = ({active,visible,accordion,children,activeItem,controll,lock}) => {
  const itemRef = useRef<any>()
  const childRef = useRef<any>()
  const acc = useRef(activeItem)
  const itemWidthRef = useRef()
  const [controllActive, setcontrollActive] = useState(false)



  useEffect(() => {
    if (!lock) {
      itemRef.current.style.height = '0px'
      itemWidthRef.current = itemRef.current.offsetWidth
    }
  }, [])

  useEffect(() => {
    if (lock) {
      itemRef.current.style.height= 'auto'
    }else{
      itemRef.current.style.height= '0px'
    }
    }, [lock])



  
  useEffect(() => {

    if(!lock){
      acc.current = activeItem
      if (controll) {
        if (activeItem || active) {
          itemRef.current.style.height =`${itemRef.current.scrollHeight}px`
           itemRef.current.style.boxSizing = 'content-box'
           setTimeout(() => {
            itemRef.current.style.height =`auto`
           }, 300);
          }else{
            itemRef.current.style.height =`${itemRef.current.scrollHeight}px`
            setTimeout(() => {
              itemRef.current.style.height = 0
            }, 1);
           
          }
      }else{
       if(controllActive){
        itemRef.current.style.height =`${itemRef.current.scrollHeight}px`
        itemRef.current.style.boxSizing = 'content-box'
        setTimeout(() => {
         itemRef.current.style.height =`auto`
        }, 300);
       }else{
        itemRef.current.style.height =`${itemRef.current.scrollHeight}px`
        setTimeout(() => {
          itemRef.current.style.height = 0
        }, 1);
       }
    }
 
    }
  
  
     
   }, [visible,active])




 const buttonClick = ()=>{
  if (!lock) {
    accordion()
    setcontrollActive(prev=>!prev)
  }
 }


  return (
    <div className='AccordionUser__bodyCover'>
       <div onClick={e=>buttonClick()} className={activeItem ? "AccordionUser__button  active _icon-arrow-next active" : "AccordionUser__button _icon-arrow-next"}>{children[0]}</div>
       <div ref={itemRef} className="AccordionUser__body">
       {children.slice(1).map((e:any)=> <div key={e} ref={childRef} className={activeItem ?"AccordionUser__item active":"AccordionUser__item"}>{e}</div>)}

       </div>
    </div>
  )
}

export default AccordionUserItem