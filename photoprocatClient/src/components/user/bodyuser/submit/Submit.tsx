import Button from '../../../UI/button/Button'

import { onSave } from '../../../../store2/actions/UserActions'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import Button2 from '../../../UI/button2/Button2'
import Loader from '../../../UI/loader/Loader'

const Submit = () => {
    const {toggle,loadData} = useAppSelector((state)=>state.reducer.user)
    const dispatch = useAppDispatch()


  return (
    <div className="User__submit">
        <Button2 onClick={()=>dispatch(onSave())} className='buttonCart _submit'>{
        loadData ? <Loader className='basketLoader'/> :
        toggle === 0 ? "Сохранить" : "Главная"
        }</Button2>
    </div>
  )
}

export default Submit