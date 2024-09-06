import { useRef} from 'react'
import Button from '../../../../UI/button/Button'

import { fileload } from '../../../../../store2/actions/AdminActions'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks'
import Button2 from '../../../../UI/button2/Button2'

export  const ImagesProduct = () => {

    const inputRef2 = useRef<HTMLInputElement>(null)
    const {fileImages} = useAppSelector(state=>state.reducer.admin)
    const dispatch = useAppDispatch()

    const activateInput2=()=>{
        inputRef2.current?.click()
     }




  return (
    <div className="adminModalProduct__images">
        <div className="adminModalProduct__imageAdd">
        <input ref={inputRef2}  onChange={(e:any)=>dispatch(fileload(e))} type="file" className="adminModalType__file" />
         <Button2 onClick={activateInput2} className='buttonCart'>выбрать изображение (минимум 2)</Button2>
        </div>
        <div className="adminModalProduct__imagesItems">
          {fileImages.length !== 0 &&
          fileImages.map((f:any)=>
          <div className="adminModalProduct__image">
          <img src={f} alt=""/>
       </div>
       ) 
         
        }  
        </div>
    </div>
  )
}

