import React, { Children, FC, ReactNode } from 'react'
import './navigation.scss'
interface FooterProps{  
    name?:string,
    children?:any
    changeName?:boolean
    lock?:boolean
    navigationClass?:string
  }
const Navigation:FC<FooterProps> = ({children,navigationClass='origin'}) => {
  return (
    <div className={`Navigation ${navigationClass}`}>{children}</div>
    
  )
}

export default Navigation