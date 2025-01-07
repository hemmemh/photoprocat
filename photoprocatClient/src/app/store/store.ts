import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catalogReducer from '../../entities/catalog/model/CatalogSlice';
import ProductSlice from '../../entities/productItem/model/ProductSlice';
import userSlice from '../../entities/user/model/UserSlice';
import basketSlice from '../../entities/basketProduct/model/BasketSlice';
import compareSlice from '../../entities/compareItem/model/CompareSlice';
import registrationSlice from '../../entities/registration/model/RegistrationSlice';
import newsSlice from '../../entities/itemNews/model/NewsSlice';
import loveSlice from '../../entities/loves/model/LoveSlice';
import  navbarSlice  from '../../entities/navBar/model/NavBarSlice';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  product: ProductSlice,
  navbar: navbarSlice,
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
