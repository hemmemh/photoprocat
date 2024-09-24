import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { basketState } from "../reducers/BasketSlice";
import { productState } from "../reducers/ProductSlice";


const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.reducer.product,
  );


  export const selectInBasket= createSelector(
    selectBase,
    (state: productState) => state.inBasket,
  ); 


  export const selectInCompare= createSelector(
    selectBase,
    (state: productState) => state.inCompare,
  ); 



  export const selectInLoves= createSelector(
    selectBase,
    (state: productState) => state.inLoves,
  ); 


  export const selectLoaders= createSelector(
    selectBase,
    (state: productState) => state.loaders,
  ); 

  export const selectModal= createSelector(
    selectBase,
    (state: productState) => state.modal,
  ); 


  export const selectProduct= createSelector(
    selectBase,
    (state: productState) => state.product,
  ); 


  export const selectProductLoad= createSelector(
    selectBase,
    (state: productState) => state.productLoad,
  );
  
  export const selectRaiting= createSelector(
    selectBase,
    (state: productState) => state.raiting,
  ); 

