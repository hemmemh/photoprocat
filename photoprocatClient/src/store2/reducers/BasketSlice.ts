import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBasket, IBasketItem, IOrder } from '../../https/basketApi';

export type basketState = {
  load: boolean;
  sumPrice: number;
  basket: IBasket | null;
  orders: IOrder | null;
};

const initialState: basketState = {
  load: false,
  sumPrice: 0,
  basket: null,
  orders: null,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setLoad(state, action: PayloadAction<boolean>) {
      state.load = action.payload;
    },
    setSumPrice(state, action: PayloadAction<number>) {
      state.sumPrice = action.payload;
    },
    setBasket(state, action: PayloadAction<IBasket>) {
      state.basket = action.payload;
    },
    setOrders(state, action: PayloadAction<IOrder>) {
      state.orders = action.payload;
    },
    setBasketItems(state, action: PayloadAction<IBasketItem[]>) {
      if (state.basket) {
        state.basket.basketItems = action.payload;
      }
    },
  },
});

export default basketSlice.reducer;
