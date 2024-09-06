import { useState } from 'react'
import { useAppSelector } from '../../../../hooks/reduxHooks'
import useUpdatePassword from '../../../../hooks/useUpdatePassword'
import Input from '../../../UI/input/Input'
import Button from '../../../UI/button/Button'


export const SetEmail = () => {
    const [mail, setmail] = useState<string>('')
    const {updatePassword} = useUpdatePassword({email:mail})
    const {modalStage} = useAppSelector((state)=>state.reducer.navbar)
  return (
    <div className={modalStage===1 ?"passwordModal active" : "passwordModal"}>
    <div className="passwordModal__title">Введите email</div>
    <div className="passwordModal__input">
    <Input value={mail} change={setmail} inputClass='registration' placeholder='email'/>
    </div>
    <div className="passwordModal__button">
    <Button onClick={updatePassword} className='login-modal g'>Продолжить</Button>
    </div>
</div>
  )
}
