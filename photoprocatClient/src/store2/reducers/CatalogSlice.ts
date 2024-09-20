import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IInformationValuesConst,
  ISlideMouseOneConst,
  ItypeInformationConst,
} from '../../utils/interfaces';
import { IInformation, IProducts } from '../../https/productApi';
import { IType } from '../../https/typesApi';
import { IBrand } from '../../https/brandsApi';

type initialState = {
  typeInformation: ItypeInformationConst | null;
  informations: IInformation[];
  informationValues: IInformationValuesConst;
  sliderMouseOn: ISlideMouseOneConst;
  priceRange: number[];
  priceValue: number | number[];
  minMaxPrice: number[];
  productsLoad: boolean;
  products: IProducts;
  gridLoader: boolean;
  sortNumber: number;
  sort: string;
  type: IType | null;
  brandsLoad: boolean;
  brands: IBrand[];
  checkedBrands: string[];
  page: number;
  limit: string;

  types: IType[];
};
const initialState: initialState = {
  typeInformation: null,
  informations: [],
  informationValues: {},
  sliderMouseOn: {},
  priceRange: [0, 10],
  minMaxPrice: [0, 100],
  productsLoad: false,
  products: {
    count: 0,
    responce: [],
    responceAll: [],
    responseForInformations: [],
    type: null,
  },
  gridLoader: false,
  sortNumber: 1,
  sort: 'date',
  priceValue: [10, 20],
  type: null,
  brandsLoad: false,
  brands: [],
  checkedBrands: [],
  page: 1,
  limit: '6',
  types: [],
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setInformationValues(
      state,
      action: PayloadAction<IInformationValuesConst>
    ) {
      state.informationValues = action.payload;
    },
    setsliderMouseOn(
      state,
      action: PayloadAction<{ [key: string]: number[] | [number, number] }>
    ) {
      state.sliderMouseOn = action.payload;
    },
    setPriceRange(state, action: PayloadAction<number[]>) {
      state.priceRange = action.payload;
    },
    setProductsLoad(state, action: PayloadAction<boolean>) {
      state.productsLoad = action.payload;
    },
    setGridLoader(state, action: PayloadAction<boolean>) {
      state.gridLoader = action.payload;
    },
    setSortNumber(state, action: PayloadAction<number>) {
      state.sortNumber = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setPriceValue(state, action: PayloadAction<number | number[]>) {
      state.priceValue = action.payload;
    },
    setType(state, action: PayloadAction<IType>) {
      state.type = action.payload;
    },
    setBrandsLoad(state, action: PayloadAction<boolean>) {
      state.brandsLoad = action.payload;
    },
    setBrands(state, action: PayloadAction<IBrand[]>) {
      state.brands = action.payload;
    },
    setCheckedBrands(state, action: PayloadAction<string[]>) {
      state.checkedBrands = action.payload;
    },
    setProducts(state, action: PayloadAction<IProducts>) {
      state.products = action.payload;
    },
    setTypeInformation(state, action: PayloadAction<ItypeInformationConst>) {
      state.typeInformation = action.payload;
    },
    setInformations(state, action: PayloadAction<IInformation[]>) {
      state.informations = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setMinMaxPrice(state, action: PayloadAction<number[]>) {
      state.minMaxPrice = action.payload;
    },
    setTypes(state, action: PayloadAction<IType[]>) {
      state.types = action.payload;
    },
  },
});

export default catalogSlice.reducer;
