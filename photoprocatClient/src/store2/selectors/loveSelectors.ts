import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { basketState } from "../reducers/BasketSlice";
import { loveState } from "../reducers/LoveSlice";


const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.reducer.love,
  );


  export const selectLoveLoad = createSelector(
    selectBase,
    (state: loveState) => state.load,
  ); 


  export const selectLoves = createSelector(
    selectBase,
    (state: loveState) => state.loves,
  ); 

