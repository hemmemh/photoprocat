import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../https/userApi';

type initialState = {
  toggle: number;
  name: string;
  serName: string;
  data: string;
  tell: string;
  loadData: boolean;
  user: IUser | null;
};

const initialState: initialState = {
  toggle: 0,
  name: '',
  serName: '',
  data: '2022-04-17',
  tell: '',
  loadData: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToggle(state, action: PayloadAction<number>) {
      state.toggle = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setSerName(state, action: PayloadAction<string>) {
      state.serName = action.payload;
    },
    setData(state, action: PayloadAction<string>) {
      state.data = action.payload;
    },
    setTell(state, action: PayloadAction<string>) {
      state.tell = action.payload;
    },
    setLoadData(state, action: PayloadAction<boolean>) {
      state.loadData = action.payload;
    },
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
