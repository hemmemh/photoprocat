import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { basketState } from "../reducers/BasketSlice";
import { catalogState } from "../reducers/CatalogSlice";


const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.reducer.catalog,
  );


  export const selectBrands = createSelector(
    selectBase,
    (state: catalogState) => state.brands,
  ); 

  export const selectBrandsLoad = createSelector(
    selectBase,
    (state: catalogState) => state.brandsLoad,
  ); 


  export const selectCheckedBrands = createSelector(
    selectBase,
    (state: catalogState) => state.checkedBrands,
  ); 


  export const selectGridLoader = createSelector(
    selectBase,
    (state: catalogState) => state.gridLoader,
  ); 



  export const selectInformationValues = createSelector(
    selectBase,
    (state: catalogState) => state.informationValues,
  ); 


  export const selectInformations = createSelector(
    selectBase,
    (state: catalogState) => state.informations,
  );
  
  

  export const selectLimit = createSelector(
    selectBase,
    (state: catalogState) => state.limit,
  ); 



  export const selectMinMaxPrice = createSelector(
    selectBase,
    (state: catalogState) => state.minMaxPrice,
  ); 


  export const selectPage = createSelector(
    selectBase,
    (state: catalogState) => state.page,
  ); 


  export const selectpriceRange = createSelector(
    selectBase,
    (state: catalogState) => state.priceRange,
  ); 



  export const selectPriceValue = createSelector(
    selectBase,
    (state: catalogState) => state.priceValue,
  ); 



  export const selectProducts = createSelector(
    selectBase,
    (state: catalogState) => state.products,
  ); 


  export const selectProductsLoad = createSelector(
    selectBase,
    (state: catalogState) => state.productsLoad,
  ); 



  export const selectSliderMouseOn = createSelector(
    selectBase,
    (state: catalogState) => state.sliderMouseOn,
  );


  export const selectSort = createSelector(
    selectBase,
    (state: catalogState) => state.sort,
  );





  export const selectSortNumber = createSelector(
    selectBase,
    (state: catalogState) => state.sortNumber,
  );


  export const selectType = createSelector(
    selectBase,
    (state: catalogState) => state.type,
  );


  export const selectTypeInformation = createSelector(
    selectBase,
    (state: catalogState) => state.typeInformation,
  );



  export const selectTypes= createSelector(
    selectBase,
    (state: catalogState) => state.types,
  );