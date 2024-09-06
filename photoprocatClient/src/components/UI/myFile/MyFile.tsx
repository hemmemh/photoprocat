import React, { useRef } from 'react'
import cls from './myFile.module.scss'

type MyFile = {
    children:React.ReactNode
    setValue:(e:any)=>void
}

const MyFile = ({children,setValue}:MyFile) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const click = ()=>{
        inputRef.current && inputRef.current.click()
    }

  return (
    <div className={cls.Myfile}>
    <input ref={inputRef} type="file" onChange={setValue}/>
    <div onClick={click}>
        {children}
    </div>
    

   </div>
  )
}

export default MyFile