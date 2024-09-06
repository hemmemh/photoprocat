
import {getBasket} from "../../../https/basketApi";
import { getCompare } from "../../../https/compareApi";
import { getLoves } from "../../../https/lovesApi";
import {  getByPurchase} from "../../../https/productApi";
import { catalogSlice } from "../../../store2/reducers/CatalogSlice";
import { AppDispatch, store } from "../../../store2/store";







export const putProducts = ()=> async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user,products} = currentState.reducer.catalog
  const {setProducts,setBasket,setCompare,setLoves} = catalogSlice.actions

  try {
    const productsPur = await getByPurchase()
    dispatch(setProducts({...products,responce:productsPur}))
    const basket = await getBasket({id:user.id})
    dispatch(setBasket(basket?.basketItems))
    const comapre = await  getCompare({id:user.compare})
    dispatch(setCompare(comapre?.compareItems))
    const loves = await getLoves({id:user.loves})
    dispatch(setLoves(loves?.lovesItems))
  } catch (error) {
    console.log(error);
  }

}















