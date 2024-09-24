import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { basketState } from "../reducers/BasketSlice";
import { newsState } from "../reducers/NewsSlice";


const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.reducer.news,
  );


  export const selectModal = createSelector(
    selectBase,
    (state: newsState) => state.modal,
  ); 


  export const selectModalCooment = createSelector(
    selectBase,
    (state: newsState) => state.modalCooment,
  ); 



  export const selectModalNews = createSelector(
    selectBase,
    (state: newsState) => state.modalNews,
  ); 



  export const selectNewsId = createSelector(
    selectBase,
    (state: newsState) => state.newsId,
  ); 

