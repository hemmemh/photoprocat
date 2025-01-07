import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store/store";
import { basketState } from "../../basketProduct/model/BasketSlice";
import { loveState } from "./LoveSlice";


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

