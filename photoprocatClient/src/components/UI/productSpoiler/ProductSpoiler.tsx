import React, { useCallback, useEffect, useRef, useState,FC,ReactNode, memo } from 'react'
import './productSpoiler.scss';
interface FooterProps{  
  name?:string,
  children?:ReactNode[] | any
  changeName?:boolean
  lock?:boolean
  className?:string
  toggle2?:any
}

const ProductSpoiler: FC<FooterProps> = memo(({name,children,changeName=true,className='',lock=false,toggle2}) => {
    const activeRef = useRef<boolean>()
    const stringRef = useRef(Math.random().toString(36).substring(2,7))
    const elementRef = useRef<any>()
 
    const spoilerRef = useRef<any>()
    const headerRef = useRef<any>()
    const bodyRef = useRef<any>()

    const [active, setactive] = useState(false)
    const [activeName, setactiveName] = useState(children[0])
    activeRef.current = active
  
    
    useEffect(() => {
      document.addEventListener('click',addClick)
     
      if (lock) {
        setactive(true)
      }
      return () => document.removeEventListener('click', addClick);
      
  }, [])
    

    const addClick = useCallback((e:any) => {
      if (spoilerRef.current && e.target !== spoilerRef.current && !spoilerRef.current.contains(e.target)) {
        setactive(false)
        return
    }



        },[])
       
  
    const click = useCallback(
      () => {
        setactive(prev=>!prev)
      },
      [],
    )
    
     
    const setName=(e:any)=>{
      if (changeName) {
        headerRef.current.firstElementChild.textContent = e.target.textContent
      }
    }
     

    
    
  
   
  return (
    <div ref={spoilerRef} id={stringRef.current}  className={`spoiler ${className} ${active && 'active'}`}>
        <div ref={headerRef} onClick={click} className={"spoiler__header active"}>{children[0]}</div>

        <div  ref={bodyRef} className={"spoiler__cover"}>
            <div   onClick={setName} className="spoiler__body">{children[1]}</div>
        </div>
       
        
    </div>
  ) 
})   

export default ProductSpoiler