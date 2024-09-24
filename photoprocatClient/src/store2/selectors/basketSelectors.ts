import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { basketState } from "../reducers/BasketSlice";


const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.reducer.basket,
  );


  export const selectBasketLoad = createSelector(
    selectBase,
    (state: basketState) => state.load,
  ); 


  export const selectBasket = createSelector(
    selectBase,
    (state: basketState) => state.basket,
  ); 


  export const selectOrders = createSelector(
    selectBase,
    (state: basketState) => state.orders,
  ); 

  export const selectSumPrice= createSelector(
    selectBase,
    (state: basketState) => state.sumPrice,
  ); 