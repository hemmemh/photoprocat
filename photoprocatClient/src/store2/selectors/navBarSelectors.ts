import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { basketState } from "../reducers/BasketSlice";
import { navBarState } from "../reducers/NavBarSlice";


const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.reducer.navbar,
  );


  export const selectFilter = createSelector(
    selectBase,
    (state: navBarState) => state.filter,
  ); 



  export const selectFilterCatalog = createSelector(
    selectBase,
    (state: navBarState) => state.filterCatalog,
  ); 


  export const selectLoader = createSelector(
    selectBase,
    (state: navBarState) => state.loader,
  );
  
  
  export const selectLoginModal = createSelector(
    selectBase,
    (state: navBarState) => state.loginModal,
  );
  
  
  export const selectMenu = createSelector(
    selectBase,
    (state: navBarState) => state.menu,
  ); 


  export const selectmenuIconRef = createSelector(
    selectBase,
    (state: navBarState) => state.menuIconRef,
  ); 


  export const selectModalStage = createSelector(
    selectBase,
    (state: navBarState) => state.modalStage,
  ); 



  export const selectPassSucc = createSelector(
    selectBase,
    (state: navBarState) => state.passSucc,
  ); 


  export const selectSearch = createSelector(
    selectBase,
    (state: navBarState) => state.search,
  ); 


  export const selectValidationError = createSelector(
    selectBase,
    (state: navBarState) => state.validationError,
  ); 


  export const selectValidationErrorText = createSelector(
    selectBase,
    (state: navBarState) => state.validationErrorText,
  ); 





