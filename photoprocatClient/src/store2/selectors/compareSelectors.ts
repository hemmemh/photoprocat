import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { basketState } from "../reducers/BasketSlice";
import { compareState } from "../reducers/CompareSlice";


const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.reducer.compare,
  );


  export const selectActiveType = createSelector(
    selectBase,
    (state: compareState) => state.activeType,
  ); 


  export const selectActiveTypeLoad= createSelector(
    selectBase,
    (state: compareState) => state.activeTypeLoad,
  ); 


  export const selectCompare= createSelector(
    selectBase,
    (state: compareState) => state.compare,
  ); 


  export const selectCompareTypes= createSelector(
    selectBase,
    (state: compareState) => state.compareTypes,
  ); 


  export const selectFirstSwiper= createSelector(
    selectBase,
    (state: compareState) => state.firstSwiper,
  ); 


  export const selectFold= createSelector(
    selectBase,
    (state: compareState) => state.fold,
  ); 


  export const selectInformations= createSelector(
    selectBase,
    (state: compareState) => state.informations,
  ); 



  export const selectCompareLoad= createSelector(
    selectBase,
    (state: compareState) => state.load,
  ); 




  export const selectSecondSwiper= createSelector(
    selectBase,
    (state: compareState) => state.secondSwiper,
  ); 