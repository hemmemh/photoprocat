import React, { useRef, useState } from 'react'

import './typeModal.scss'
import Input from '../../../UI/input/Input'
import Button from '../../../UI/button/Button'
import useType from '../../../../hooks/useType'
import Button2 from '../../../UI/button2/Button2'
export  const TypeModal = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const activateInput=()=>{
        inputRef.current?.click()
     }

     const {setname,fileImage,fileloadType,createBrandFun,name} = useType()






  return (
    <div className="adminModalType">
         
    <div className="adminModalType__input">
        <Input value={name} change={setname} inputClass='registration gv' placeholder='имя типа'/>
    </div>
    <div className="adminModalType__images">
        <div className="adminModalType__imageAdd">
        <input ref={inputRef}  onChange={(e:any)=>fileloadType(e)} type="file" className="adminModalType__file" />
         <Button2 onClick={activateInput} className='buttonCart'>выбрать изображение</Button2>
        </div>
        <div className="adminModalType__imagesItems">
          {fileImage !== null &&
           <div className="adminModalType__image">
           <img src={fileImage} alt=""/>
        </div>
        }  
         
            
        </div>
        
  
    </div>
    <Button2 onClick={createBrandFun} className='buttonCart'>Создать</Button2>


     </div>
  )
}

