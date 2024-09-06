
import Input from '../../../../UI/input/Input'

import { adminSlice } from '../../../../../store2/reducers/AdminSlice'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks'
import MyTextArea from '../../../../UI/myTextArea/MyTextArea'

export  const ProductInputs = () => {

    const {name,description,price} = useAppSelector(state=>state.reducer.admin)
    const {setName,setDescription,setPrice} = adminSlice.actions
    const dispatch = useAppDispatch()

    const setPricef = (f:any)=>{
        if (parseInt(f) == Number(f) || f == '' )  dispatch(setPrice(f))
    }

  return (
    <div className="adminModalProduct__input">
      <div className="adminModalProduct__flex">   
    <Input value={name} change={(e:any)=>dispatch(setName(e))} inputClass='registration gv' placeholder='имя'/>
    <Input value={price} change={(ff:any)=>setPricef(ff)} inputClass='registration gv' placeholder='цена'/>
      </div>
     <MyTextArea value={description} setValue={(e:any)=>dispatch(setDescription(e)) } className='registration' placeholder='описание'/>

</div>
  )
}

