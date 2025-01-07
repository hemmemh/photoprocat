import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store/store";
import { basketState } from "../../basketProduct/model/BasketSlice";
import { userState } from "./UserSlice";


const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.reducer.user,
  );


  export const selectData = createSelector(
    selectBase,
    (state: userState) => state.data,
  ); 


  export const selectLoadData = createSelector(
    selectBase,
    (state: userState) => state.loadData,
  );
  
  
  export const selectName = createSelector(
    selectBase,
    (state: userState) => state.name,
  ); 

  export const selectSerName = createSelector(
    selectBase,
    (state: userState) => state.serName,
  ); 


  export const selectTell = createSelector(
    selectBase,
    (state: userState) => state.tell,
  );


  export const selectToggle = createSelector(
    selectBase,
    (state: userState) => state.toggle,
  );


  export const selectUser= createSelector(
    selectBase,
    (state: userState) => state.user,
  );

