import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type navBarState = {
  menu: boolean;
  menuIconRef: HTMLElement | null;
  search: boolean;
  filter: string;
  filterCatalog: string;
  loginModal: boolean;
  loader: boolean;
  passSucc: boolean;
  validationError: boolean;
  validationErrorText: string[];
  modalStage: number;
};
const initialState: navBarState = {
  menu: false,
  menuIconRef: null,
  search: false,
  filter: '',
  filterCatalog: '',
  loginModal: false,
  loader: false,
  passSucc: false,
  validationError: false,
  validationErrorText: [],
  modalStage: 1,
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setMenu(state, action: PayloadAction<boolean>) {
      state.menu = action.payload;
    },

    setSearch(state, action: PayloadAction<boolean>) {
      state.search = action.payload;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setFilterCatalog(state, action: PayloadAction<string>) {
      state.filterCatalog = action.payload;
    },
    setLoginModal(state, action: PayloadAction<boolean>) {
      state.loginModal = action.payload;
    },
    setLoader(state, action: PayloadAction<boolean>) {
      state.loader = action.payload;
    },
    setPassSucc(state, action: PayloadAction<boolean>) {
      state.passSucc = action.payload;
    },
    setValidationError(state, action: PayloadAction<boolean>) {
      state.validationError = action.payload;
    },
    setValidationErrorText(state, action: PayloadAction<string[]>) {
      state.validationErrorText = action.payload;
    },
    setModalStage(state, action: PayloadAction<number>) {
      state.modalStage = action.payload;
    },
  },
});

export default navbarSlice.reducer;
