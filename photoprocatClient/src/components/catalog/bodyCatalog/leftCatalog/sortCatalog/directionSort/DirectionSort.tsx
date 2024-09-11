import { catalogSlice } from "../../../../../../store2/reducers/CatalogSlice"
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/reduxHooks"
import cls from './DirectionSort.module.scss'
import Radio from "../../../../../UI/radio/Radio"
import Button2 from "../../../../../UI/button2/Button2"

const items = [{direct:1,class:''},{direct:-1,class:'_direct'}]
const DirectionSort = () => {
    const dispatch = useAppDispatch()
    const {setSortNumber} = catalogSlice.actions
    const {sortNumber} = useAppSelector((state)=>state.reducer.catalog)

    
  return (
    <div className={cls.directSort}>   
    {items.map((el:any)=>
    <Radio id={el.direct} name="adawd"   key={el.direct} value={sortNumber} setValue={()=>dispatch(setSortNumber(el.direct))} >
      <Button2   className={` ${cls.sortButton}  ${el.direct === sortNumber && cls.active} ${el.class && cls._direct}  _icon-arrow-bottom `}></Button2>
    </Radio>
    )}

    </div>
  )
}

export default DirectionSort