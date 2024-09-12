
import AccordionUser from '../../../UI/accordionUser/AccordionUser'
import AccordionUserItem from '../../../UI/accordionUser/AccordionUserItem'
import Button from '../../../UI/button/Button'
import { API_URL } from '../../../../utils/config'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import './orders.scss'
import { IOrderItem, IOrdersItemProduct } from '../../../../utils/interfaces'
import { repeat } from '../../../../store2/actions/BasketActions'
const Orders = () => {
    const {toggle, user} = useAppSelector((state)=>state.reducer.user)
    const {orders} = useAppSelector((state)=>state.reducer.catalog)
    const dispatch = useAppDispatch()




  return (
    <div className={toggle === 1 ? "User__orders orders-user active" : "User__orders orders-user"}>
        <div className="orders-user__top top-orders">
            <div className="top-orders__item">Заказ</div>
            <div className="top-orders__item">Дата</div>
            <div className="top-orders__item">Кол-во</div>
            <div className="top-orders__item">Сумма</div>
            <div className="top-orders__item"></div>
            <div className="top-orders__item"></div>
           
        </div>
        <div className="orders-user__order order">
            <AccordionUser accordionClass='user'>
                {orders.map((el:IOrderItem)=>
                <AccordionUserItem key={el._id}>
                <div className="order__top">
            <div className="order__number">{el.number}</div>
            <div className="order__date">{el.date}</div>
            <div className="order__date"></div>
            <div className="order__price">{el.price}</div>
            <div className="order__button">
            <Button onClick={()=>dispatch(repeat(el.ordersItemProduct))} className='user-orders g'>Повторить</Button>
             </div>
            <div className="order__arrow _icon-arrow-bottom"></div>
                </div>
                <div className="order__product-cover">
                    {el.ordersItemProduct.map((es:IOrdersItemProduct)=>
                       <div key={es.product._id} className="order__product product-order">
                       <div className="product-order__item">
                           <div className="product-order__image-cover">
                           <div className="product-order__image">
                           <img src={`${API_URL}/${es.product.name}/${JSON.parse(es.product.images)[0]}`} alt=""/>
                           </div>
                           </div>
                           <div className="product-order__info">
                               <div className="product-order__name">{es.product.name}</div>
                               <div className="product-order__brand">{es.product.brand.name}</div>
                           </div>
                       </div>
                       <div className="product-order__item">
                           <div className="product-order__count">{es.amount}</div>
                       </div>
                       <div className="product-order__item">
                           <div className="product-order__price">{es.amount * es.product.price} Р</div>
                       </div>
                       <div className="product-order__item">
                       </div>
                       <div className="product-order__item">
                       </div>
                           </div>
                           )}
                </div>
                </AccordionUserItem>
            )}
                
               
            </AccordionUser>
          
            
        </div>
        
    </div>
  )
}

export default Orders