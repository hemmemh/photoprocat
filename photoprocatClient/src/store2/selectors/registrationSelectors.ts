import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { basketState } from "../reducers/BasketSlice";
import { registrationState } from "../reducers/RegistrationSlice";


const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.reducer.registration,
  );


  export const selectData = createSelector(
    selectBase,
    (state: registrationState) => state.data,
  ); 


  export const selectLoader = createSelector(
    selectBase,
    (state: registrationState) => state.loader,
  ); 



  export const selectMail = createSelector(
    selectBase,
    (state: registrationState) => state.mail,
  ); 


  export const selectName = createSelector(
    selectBase,
    (state: registrationState) => state.name,
  ); 


  export const selectPassword= createSelector(
    selectBase,
    (state: registrationState) => state.password,
  ); 

  export const selectSecondName= createSelector(
    selectBase,
    (state: registrationState) => state.secondName,
  ); 


  export const selectSuccessfullReg= createSelector(
    selectBase,
    (state: registrationState) => state.successfullReg,
  ); 

  export const selectTell= createSelector(
    selectBase,
    (state: registrationState) => state.tell,
  ); 

  export const selectValidationEmail= createSelector(
    selectBase,
    (state: registrationState) => state.validationEmail,
  ); 


  export const selectValidationPassword= createSelector(
    selectBase,
    (state: registrationState) => state.validationPassword,
  ); 