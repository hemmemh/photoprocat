import AccordionUser from '../../../UI/accordionUser/AccordionUser';
import AccordionUserItem from '../../../UI/accordionUser/AccordionUserItem';
import Button from '../../../UI/button/Button';
import { API_URL } from '../../../../utils/config';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import './orders.scss';
import { repeat } from '../../../../store2/actions/BasketActions';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../../app/config/routs';
import { IOrderItem, IOrdersItemProduct } from '../../../../https/basketApi';
import { selectToggle } from '../../../../store2/selectors/userSelectors';
import { selectOrders } from '../../../../store2/selectors/basketSelectors';

const Orders = () => {
  const toggle = useAppSelector(selectToggle);
  const orders = useAppSelector(selectOrders);
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={
        toggle === 1
          ? 'User__orders orders-user active'
          : 'User__orders orders-user'
      }
    >
      <div className="orders-user__top top-orders">
        <div className="top-orders__item">Заказ</div>
        <div className="top-orders__item">Дата</div>
        <div className="top-orders__item">Кол-во</div>
        <div className="top-orders__item">Сумма</div>
        <div className="top-orders__item"></div>
        <div className="top-orders__item"></div>
      </div>
      <div className="orders-user__order order">
        <AccordionUser accordionClass="user">
          {orders?.ordersItems.map((el: IOrderItem) => (
            <AccordionUserItem key={el._id}>
              <div className="order__top">
                <div className="order__number">{el.number}</div>
                <div className="order__date">{el.date}</div>
                <div className="order__date"></div>
                <div className="order__price">{el.price}</div>
                <div className="order__button">
                  <Button
                    onClick={() => dispatch(repeat(el.ordersItemProduct))}
                    className="user-orders g"
                  >
                    Повторить
                  </Button>
                </div>
                <div className="order__arrow _icon-arrow-bottom"></div>
              </div>
              <div className="order__product-cover">
                {el.ordersItemProduct.map((es: IOrdersItemProduct) => (
                  <div
                    key={es.product._id}
                    className="order__product product-order"
                  >
                    <div className="product-order__item">
                      <div className="product-order__image-cover">
                        <div
                          onClick={() =>
                            navigate(`${PRODUCT_ROUTE}/${es.product._id}`)
                          }
                          className="product-order__image"
                        >
                          <img
                            src={`${API_URL}/${es.product.name}/${JSON.parse(es.product.images)[0]}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="product-order__info">
                        <div className="product-order__name">
                          {es.product.name}
                        </div>
                        <div className="product-order__brand">
                          {es.product.brand.name}
                        </div>
                      </div>
                    </div>
                    <div className="product-order__item">
                      <div className="product-order__count">{es.amount}</div>
                    </div>
                    <div className="product-order__item">
                      <div className="product-order__price">
                        {es.amount * es.product.price} Р
                      </div>
                    </div>
                    <div className="product-order__item"></div>
                    <div className="product-order__item"></div>
                  </div>
                ))}
              </div>
            </AccordionUserItem>
          ))}
        </AccordionUser>
      </div>
    </div>
  );
};

export default Orders;
