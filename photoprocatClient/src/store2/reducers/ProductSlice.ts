import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IRating } from '../../https/productApi';

interface ILoaders {
  basket: boolean;
  compare: boolean;
  love: boolean;
}
type initialState = {
  product: IProduct | null;
  productLoad: boolean;
  inBasket: boolean;
  inCompare: boolean;
  inLoves: boolean;
  raiting: number;
  modal: boolean;
  loaders: ILoaders;
};
const initialState: initialState = {
  product: null,
  productLoad: false,
  inBasket: false,
  inCompare: false,
  inLoves: false,
  raiting: 1,
  modal: false,
  loaders: {
    basket: true,
    compare: true,
    love: true,
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<IProduct | null>) {
      state.product = action.payload;
    },
    setProductLoad(state, action: PayloadAction<boolean>) {
      state.productLoad = action.payload;
    },
    setInBasket(state, action: PayloadAction<boolean>) {
      state.inBasket = action.payload;
    },
    setInCompare(state, action: PayloadAction<boolean>) {
      state.inCompare = action.payload;
    },
    setInLoves(state, action: PayloadAction<boolean>) {
      state.inLoves = action.payload;
    },
    setRaiting(state, action: PayloadAction<number>) {
      state.raiting = action.payload;
    },
    setModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;
    },
    setLoaders(state, action: PayloadAction<ILoaders>) {
      state.loaders = action.payload;
    },
    setProductRaiting(state, action: PayloadAction<IRating[]>) {
      if (state.product) {
        state.product.ratings = action.payload;
      }
    },
  },
});

export default productSlice.reducer;
