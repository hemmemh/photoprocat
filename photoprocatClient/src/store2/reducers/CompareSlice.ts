import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type Swiper as SwiperClass } from 'swiper';
import { IInformation } from '../../https/productApi';
import { ICompare, ICompareItem } from '../../https/compareApi';

type initialState = {
  firstSwiper: SwiperClass | null;
  secondSwiper: SwiperClass | null;
  activeType: string;
  fold: boolean;
  activeTypeLoad: boolean;
  compareTypes: string[];
  informations: IInformation[];
  load: boolean;
  compare: ICompare | null;
};

const initialState: initialState = {
  firstSwiper: null,
  secondSwiper: null,
  activeType: '',
  fold: false,
  activeTypeLoad: false,
  compareTypes: [],
  informations: [],
  load: false,
  compare: null,
};

export const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    setFirstSwiper(state, action: PayloadAction<SwiperClass | null>) {
      // @ts-expect-error:Не может воспринять SwiperClass

      state.firstSwiper = action.payload;
    },
    setSecondSwiper(state, action: PayloadAction<SwiperClass | null>) {
      // @ts-expect-error:Не может воспринять SwiperClass
      state.secondSwiper = action.payload;
    },
    setActiveType(state, action: PayloadAction<string>) {
      state.activeType = action.payload;
    },
    setFold(state, action: PayloadAction<boolean>) {
      state.fold = action.payload;
    },
    setActiveTypeLoad(state, action: PayloadAction<boolean>) {
      state.activeTypeLoad = action.payload;
    },
    setCompareTypes(state, action: PayloadAction<string[]>) {
      state.compareTypes = action.payload;
    },
    setInformations(state, action: PayloadAction<IInformation[]>) {
      state.informations = action.payload;
    },
    setLoad(state, action: PayloadAction<boolean>) {
      state.load = action.payload;
    },
    setCompare(state, action: PayloadAction<ICompare>) {
      state.compare = action.payload;
    },
    setCompareItems(state, action: PayloadAction<ICompareItem[]>) {
      if (state.compare) {
        state.compare.compareItems = action.payload;
      }
    },
  },
});

export default compareSlice.reducer;
