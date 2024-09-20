import {
  addProductInLoves,
  ILovesItem,
  removeProductFromLoves,
} from '../../https/lovesApi';
import { loveSlice } from '../reducers/LoveSlice';
import { productSlice } from '../reducers/ProductSlice';
import { AppDispatch, store } from '../store';

export const addToLovesAction =
  (id: string) => async (dispatch: AppDispatch) => {
    const currentState = store.getState();

    const { loaders } = currentState.reducer.product;
    const { loves } = currentState.reducer.love;
    const { user } = currentState.reducer.user;
    const { setLoaders, setInLoves } = productSlice.actions;
    const { setLovesItems } = loveSlice.actions;

    try {
      if (!user || !loves) return;
      dispatch(setLoaders({ ...loaders, love: false }));
      const data = await addProductInLoves({
        lovesId: user.loves,
        product: id,
      });

      const newLovesItems = [...loves.lovesItems];
      newLovesItems.push(data);
      dispatch(setLovesItems(newLovesItems));
      dispatch(setInLoves(true));
      dispatch(setLoaders({ ...loaders, love: true }));
    } catch (error) {
      console.log(error);
    }
  };

export const removeFromLoves =
  (id: string) => async (dispatch: AppDispatch) => {
    const currentState = store.getState();
    const { loaders } = currentState.reducer.product;
    const { user } = currentState.reducer.user;
    const { loves } = currentState.reducer.love;
    const { setLoaders, setInLoves } = productSlice.actions;
    const { setLovesItems } = loveSlice.actions;

    try {
      if (!user || !loves) return;
      dispatch(setLoaders({ ...loaders, love: false }));
      await removeProductFromLoves({ id: id, lovesId: user.loves });
      const item = loves.lovesItems.find(
        (el: ILovesItem) => el.product._id === id
      );
      if (!item) return;
      dispatch(setInLoves(false));
      dispatch(setLoaders({ ...loaders, love: true }));
      const newLovesItems = loves.lovesItems.filter(
        (el) => el._id !== item._id
      );
      dispatch(setLovesItems(newLovesItems));
    } catch (error) {
      console.log(error);
    }
  };
