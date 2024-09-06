import React,{FC,useState,useEffect, useContext} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { navbarSlice } from '../../store2/reducers/NavBarSlice'
import { basketSlice } from '../../store2/reducers/BasketSlice'
import { changeAm, remove } from '../../store2/actions/BasketActions'
import { API_URL } from '../../utils/config'
import Amount from '../UI/amount/Amount'

interface button{
    e:any
   
    products:any
    basketId:any
  
   }
   
   
const BasketProduct:FC<button>  = ({e,products,basketId}) => {
    const [amount, setamount] = useState(0)
    const {sumPrice} = useAppSelector(state=>state.reducer.basket)
    const {setSumPrice} = basketSlice.actions
    const dispatch = useAppDispatch()



    useEffect(() => {
      setamount(e.count)
      console.log(e.product.price,sumPrice);
      
   
      
    }, [])

    const setAmount = (e:any,el:any)=>{
        dispatch(changeAm(e,el,amount))
        setamount(el)
        
    }


    const onRemove = ()=>{
         dispatch(remove(e,amount,basketId))
       
    }


    
 
  return (
    <div className="items-basket__product">
    <div className="items-basket__image-flex">
        <div className="items-basket__image-cover">
            <div className="items-basket__image">
            <img src={`${API_URL}/${e.product.name}/${JSON.parse(e.product.images)[0]}`} alt=""/>
            </div>
        </div>
    </div>
    
    
    
    
    <div className="items-basket__info">
        <div className="items-basket__name">{e.product.name}</div>
        <div className="items-basket__brand">{e.product.brand.name}</div>
    </div>
    <div className="items-basket__price">{e.product.price} Р</div>
    <div className="items-basket__amount amount-basket">
        <Amount value={amount} change={(el:any)=>setAmount(e,el)} classAmount='basket'/>
        
    </div>
    <div className="items-basket__total">{e.product.price * amount} Р</div>
    <div onClick={onRemove} className="items-basket__delete _icon-delete"></div>
</div>
  )
}

export default BasketProduct