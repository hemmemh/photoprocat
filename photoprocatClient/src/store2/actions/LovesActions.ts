
import { addOrder, getBasket, removeAll } from "../../https/basketApi";
import { getCompare } from "../../https/compareApi";
import { getLoves } from "../../https/lovesApi";

import { catalogSlice } from "../reducers/CatalogSlice";
import { loveSlice } from "../reducers/LoveSlice";


import { AppDispatch, store } from "../store";




export const putLoves = ()=>async (dispatch:AppDispatch) => {
  const currentState = store.getState();
  const {user} = currentState.reducer.catalog
  const {setBasket,setCompare,setLoves} = catalogSlice.actions
  const {setLoad} = loveSlice.actions
  try {
    dispatch(setLoad(true))
    const loves = await getLoves({id:user.loves})
    dispatch(setLoves(loves.lovesItems))
    const compare = await getCompare({id:user.compare})
    dispatch(setCompare(compare.compareItems))
    const basket = await getBasket({id:user.id})
    dispatch(setBasket(basket.basketItems))
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoad(false))
  }

}
















