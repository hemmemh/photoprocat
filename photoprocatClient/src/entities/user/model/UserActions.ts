import { HOME_ROUTE } from '../../../app/config/routs';
import { AppDispatch, store } from '../../../app/store/store';
import jwtDecode from 'jwt-decode';
import { loveSlice } from '../../loves/model/LoveSlice';
import { basketSlice } from '../../basketProduct/model/BasketSlice';
import { compareSlice } from '../../compareItem/model/CompareSlice';
import { userSlice } from './UserSlice';
import { changeUser, ILogin, IUser, login, logout, refresh } from '../../../shared/https/userApi';
import { getBasket, getOrder } from '../../../shared/https/basketApi';
import { getCompare } from '../../../shared/https/compareApi';
import { getLoves } from '../../../shared/https/lovesApi';
import { navbarSlice } from '../../navBar/model/NavBarSlice';

export const onSave = () => async (dispatch: AppDispatch) => {
  const currentState = store.getState();
  const { user } = currentState.reducer.user;
  const { toggle, data, name, serName, tell } = currentState.reducer.user;
  const { setLoadData } = userSlice.actions;

  try {
    if (!user) return;
    dispatch(setLoadData(true));
    switch (toggle) {
      case 0:
        await changeUser({ id: user.id, name, serName, birthDate: data, tell });

        return;
      case 1:
        window.location.replace(HOME_ROUTE);

        return;
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadData(false));
  }
};

export const refreshUser = () => async (dispatch: AppDispatch) => {
  const { setUser, setLoadData } = userSlice.actions;
  const { setLoves } = loveSlice.actions;
  const { setBasket, setOrders } = basketSlice.actions;
  const { setCompare } = compareSlice.actions;

  try {
    dispatch(setLoadData(true));
    const data = await refresh();
    console.log('data', data);
    
    const user: IUser = jwtDecode(data.refreshToken);

    dispatch(setUser(user));

    const basket = await getBasket({ id: user.id });
    dispatch(setBasket(basket));

    const compare = await getCompare({ id: user.compare });
    dispatch(setCompare(compare));

    const loves = await getLoves({ id: user.loves });
    dispatch(setLoves(loves));

    const orders = await getOrder({ id: user.orders });

    dispatch(setOrders(orders));

  
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadData(false));
  }
};

export const onLogout = () => async (dispatch: AppDispatch) => {
  const { setUser } = userSlice.actions;

  try {
    await logout();
    dispatch(setUser(null));
    window.location.replace(HOME_ROUTE);
  } catch (error) {
    console.log(error);
  }
};

export const Login =
  ({ mail, password }: ILogin) =>
  async (dispatch: AppDispatch) => {
    const { setUser} = userSlice.actions;
    const { setLoginModal} = navbarSlice.actions;
    const { setLoves } = loveSlice.actions;
    const { setBasket, setOrders } = basketSlice.actions;
    const { setCompare } = compareSlice.actions;
    try {
      const e = await login({ mail, password });
      const user: IUser = jwtDecode(e.refreshToken);

      dispatch(setUser(user));
      const basket = await getBasket({ id: user.id });

      dispatch(setBasket(basket));
      const compare = await getCompare({ id: user.compare });

      dispatch(setCompare(compare));
      const loves = await getLoves({ id: user.loves });

      dispatch(setLoves(loves));
      const orders = await getOrder({ id: user.orders });
  
      dispatch(setOrders(orders));
      dispatch(setLoginModal(false));
    } catch (error) {
      console.log(error);
    }
  };
