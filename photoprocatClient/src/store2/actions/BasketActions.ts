import {
  addItemToBasket,
  addOrder,
  changeAmount,
  IBasketItem,
  IOrdersItemProduct,
  removeAll,
  removeItemFromBasket,
} from '../../https/basketApi';
import { change } from '../../https/productApi';
import { BASKET_ROUTE, HOME_ROUTE } from '../../app/config/routs';
import { basketSlice } from '../reducers/BasketSlice';
import { AppDispatch, store } from '../store';
import { productSlice } from '../reducers/ProductSlice';

export const buy = () => async (dispatch: AppDispatch) => {
  const currentState = store.getState();
  const { user } = currentState.reducer.user;
  const { setBasketItems } = basketSlice.actions;
  const { sumPrice, basket } = currentState.reducer.basket;

  try {
    if (!basket || !user) return;

    let arr: { [key: string]: number }[] = [];
    for (const it of basket.basketItems) {
      arr = [...arr, { [it.product._id]: it.count }];
    }

    await addOrder({
      ordersId: user.orders,
      price: sumPrice,
      products: JSON.stringify(arr),
    });

    for (const it of basket.basketItems) {
      await change({ id: it.product._id, purchase: 1 });
    }

    removeAll({ id: user.basket });
    dispatch(setBasketItems([]));
    window.location.replace(HOME_ROUTE);
  } catch (error) {
    console.log(error);
  }
};

export const changeAm =
  (e: IBasketItem, el: number, amount: number) =>
  async (dispatch: AppDispatch) => {
    const currentState = store.getState();
    const { sumPrice } = currentState.reducer.basket;
    const { setSumPrice } = basketSlice.actions;
    try {
      const price = sumPrice - amount * e.product.price + el * e.product.price;
      dispatch(setSumPrice(price));
      await changeAmount({ id: e._id, count: el });
    } catch (error) {
      console.log(error);
    }
  };

export const repeat =
  (products: IOrdersItemProduct[]) => async (dispatch: AppDispatch) => {
    const currentState = store.getState();
    const { user } = currentState.reducer.user;
    const { setBasketItems } = basketSlice.actions;
    try {
      if (!user) return;
      const newProducts: IBasketItem[] = [];

      await removeAll({ id: user.basket });
      for (const it of products) {
        const item = await addItemToBasket({
          basketId: user.basket,
          product: it.product._id,
          count: it.amount,
        });
        newProducts.push(item);
      }
      dispatch(setBasketItems(newProducts));
      window.location.replace(BASKET_ROUTE);
    } catch (error) {
      console.log(error);
    }
  };

export const addToBasketAction =
  (id: string) => async (dispatch: AppDispatch) => {
    const currentState = store.getState();
    const { loaders } = currentState.reducer.product;
    const { user } = currentState.reducer.user;
    const { basket } = currentState.reducer.basket;
    const { setLoaders, setInBasket } = productSlice.actions;
    const { setBasketItems } = basketSlice.actions;

    try {
      console.log('****');

      if (!user || !basket) return;

      dispatch(setLoaders({ ...loaders, basket: false }));
      const data = await addItemToBasket({
        basketId: user.basket,
        product: id,
        count: 1,
      });
      console.log('bakset', data, basket);
      const newBasketItems = [...basket.basketItems];
      newBasketItems.push(data);
      dispatch(setInBasket(true));
      dispatch(setBasketItems(newBasketItems));
      dispatch(setLoaders({ ...loaders, basket: true }));
    } catch (error) {
      console.log(error);
    }
  };

export const removeFromBasket =
  (id: string | undefined) => async (dispatch: AppDispatch) => {
    const currentState = store.getState();
    const { loaders } = currentState.reducer.product;
    const { user } = currentState.reducer.user;
    const { basket, sumPrice } = currentState.reducer.basket;
    const { setLoaders, setInBasket } = productSlice.actions;
    const { setBasketItems, setSumPrice } = basketSlice.actions;

    try {
      if (!user || !basket) return;
      dispatch(setLoaders({ ...loaders, basket: false }));

      const item = basket.basketItems.find(
        (el: IBasketItem) => el.product._id === id
      );
      if (!item) return;
      const removedItem = await removeItemFromBasket({
        id: item._id,
        basketId: user.basket,
      });
      dispatch(
        setSumPrice(sumPrice - removedItem.product.price * removedItem.count)
      );
      const newBasketItems = basket.basketItems.filter(
        (el) => el._id !== item._id
      );

      dispatch(setBasketItems(newBasketItems));
      dispatch(setInBasket(false));
      dispatch(setLoaders({ ...loaders, basket: true }));
    } catch (error) {
      console.log(error);
    }
  };
