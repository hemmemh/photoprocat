import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catalogReducer from './reducers/CatalogSlice';
import ProductSlice from './reducers/ProductSlice';
import NavBarSlice from './reducers/NavBarSlice';
import userSlice from './reducers/UserSlice';
import basketSlice from './reducers/BasketSlice';
import compareSlice from './reducers/CompareSlice';
import registrationSlice from './reducers/RegistrationSlice';
import newsSlice from './reducers/NewsSlice';
import loveSlice from './reducers/LoveSlice';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  product: ProductSlice,
  navbar: NavBarSlice,
  user: userSlice,
  basket: basketSlice,
  compare: compareSlice,
  registration: registrationSlice,
  news: newsSlice,
  love: loveSlice,
});

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
