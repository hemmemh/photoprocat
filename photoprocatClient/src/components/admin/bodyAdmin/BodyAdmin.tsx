
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { adminSlice } from '../../../store2/reducers/AdminSlice'
import Button from '../../UI/button/Button'
import Button2 from '../../UI/button2/Button2'
import './bodyAdmin.scss'



const BodyAdmin = () => {

    const {setModal,setModalSection} = adminSlice.actions
    const dispatch = useAppDispatch()


    const  setModalActive = (number:number)=>{
        dispatch(setModalSection(number))
        dispatch(setModal(true))
    }


  return (
    <div className="Admin__container">
        <div className="Admin__body">
            <Button2 onClick={()=>setModalActive(1)} className='buttonCart'>Создать тип</Button2>
            <Button2 onClick={()=>setModalActive(2)} className='buttonCart'>Создать бренд</Button2>
            <Button2 onClick={()=>setModalActive(3)} className='buttonCart'>Создать продукт</Button2>
        </div>
    </div>
  )
}

export default BodyAdmin

