import { useState } from "react"
import { Modal } from "../../UI/modal/Modal"
import Input from "../../UI/input/Input"
import { Rating } from "@mui/material"
import Button from "../../UI/button/Button"
import { useParams } from "react-router-dom"
import { productSlice } from "../../../store2/reducers/ProductSlice"
import { addRaitingToProduct } from "../../../store2/actions/ProductActions"
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks"
import MyTextArea from "../../UI/myTextArea/MyTextArea"

const ModalRaiting = () => {
    const [name, setname] = useState<string>('')
    const [sername, setsername] = useState<string>('')
    const [text, settext] = useState<string>('')
    const [raitingModal, setraitingModal] = useState<number | null>(1)
    const {id} = useParams()
    const {modal} = useAppSelector((state)=>state.reducer.product)
    const {setModal} = productSlice.actions
    const setRaitingToProduct = ()=>{
        addRaitingToProduct(id,raitingModal,sername,text,name)
    }
    const dispatch = useAppDispatch()
    

  return (
    <Modal active={modal} setActive={(e:any)=>dispatch(setModal(e))} modalClass='raiting'>
    <div className="RaitingModal">
        <div className="RaitingModal__top">
            <Input value={name} change={setname} inputClass='registration gv' placeholder='Имя *'/>
            <Input value={sername} change={setsername} inputClass='registration gv' placeholder='Фамилия *'/>
        </div>
        <div className="RaitingModal__raiting">
            <Rating value={raitingModal}
                onChange={(event, newValue) => {setraitingModal(newValue)}}/>
        </div>
        
        <div className="RaitingModal__text">
            <MyTextArea value={text} setValue={(e)=>settext(e)} placeholder='отзыв' className='RaitingModal__textarea'/>
        </div>
        <div className="RaitingModal__button">
        <Button  onClick={setRaitingToProduct} className='basket g'>Отправить</Button>
        </div>
        
    </div>
    
 </Modal>
  )
}

export default ModalRaiting