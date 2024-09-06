

import { useAppDispatch } from '../../../../../hooks/reduxHooks'
import { removeByType } from '../../../../../store2/actions/CompareActions'

const LeftCompare = () => {
    const dispatch = useAppDispatch()

  return (
    <div className="main-compare__top-left">
       <div onClick={()=>dispatch(removeByType())} className="main-compare__clear _icon-delete">Очистить</div>
       <div className="main-compare__item">Модель Фотоаппарата</div>
    </div>
  )
}

export default LeftCompare