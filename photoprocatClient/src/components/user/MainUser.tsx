
import BodyUser from './bodyuser/BodyUser'
import Navigation from '../UI/navigation/Navigation'
import { useEffect } from 'react'
import { getOrder } from '../../https/basketApi'
import { catalogSlice } from '../../store2/reducers/CatalogSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import './user.scss'

const MainUser = () => {
    const {setOrders} = catalogSlice.actions
    const {user} = useAppSelector((state)=>state.reducer.catalog)
    const dispatch = useAppDispatch()

    
    useEffect(() => {
        getOrder({id:user.orders}).then(data=>{
            dispatch(setOrders(data.ordersItems))
        })
    }, [])


  return (
    <div className="User">
        <div className="User__container">
            <Navigation navigationClass='user'>Главная / Личный кабинет</Navigation>
            <div className="User__title"><span>Личный</span> Кабинет</div>
            <BodyUser/>
        </div>
    </div>
  )
}

export default MainUser