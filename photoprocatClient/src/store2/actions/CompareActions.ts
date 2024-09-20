import {
  addItemToCompare,
  ICompareItem,
  removeItemFromCompare,
  removeItemFromCompareByType,
} from '../../https/compareApi';
import { compareSlice } from '../reducers/CompareSlice';
import { productSlice } from '../reducers/ProductSlice';
import { AppDispatch, store } from '../store';

export const putCompare = () => async (dispatch: AppDispatch) => {
  const currentState = store.getState();
  const { compare } = currentState.reducer.compare;
  const { setCompareTypes, setActiveType, setInformations, setLoad } =
    compareSlice.actions;

  try {
    if (!compare) return;

    const typesArr: string[] = [];

    compare.compareItems.forEach((el: ICompareItem) => {
      if (!typesArr.includes(el.product.type.name)) {
        typesArr.push(el.product.type.name);
      }

      dispatch(setCompareTypes(typesArr));
      dispatch(setActiveType(typesArr[0]));

      const itemInformations = compare.compareItems.find(
        (el) => el.product.type.name === typesArr[0]
      );
      if (!itemInformations) return;
      dispatch(setInformations(itemInformations.product.information));
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoad(false));
  }
};

export const updateCompare = () => async (dispatch: AppDispatch) => {
  const currentState = store.getState();
  const { compare } = currentState.reducer.compare;
  const { activeType } = currentState.reducer.compare;
  const { setCompareTypes, setActiveType, setInformations, setActiveTypeLoad } =
    compareSlice.actions;

  try {
    dispatch(setActiveTypeLoad(true));
    if (!compare) return;
    const typesArr: string[] = [];

    compare.compareItems.forEach((el: ICompareItem) => {
      if (!typesArr.includes(el.product.type.name)) {
        typesArr.push(el.product.type.name);
      }
    });

    dispatch(setCompareTypes(typesArr));

    if (typesArr.length === 0) {
      dispatch(setActiveType('Типы'));
    } else {
      if (
        !compare.compareItems.find(
          (ell: ICompareItem) => ell.product.type.name === activeType
        )
      ) {
        dispatch(setActiveType(typesArr[0]));
        const item = compare.compareItems.find(
          (ell: ICompareItem) => ell.product.type.name === typesArr[0]
        );
        item && dispatch(setInformations(item.product.information));
      }
    }
    dispatch(setActiveTypeLoad(false));
  } catch (error) {
    console.log(error);
  }
};

export const removeByType = () => async (dispatch: AppDispatch) => {
  const currentState = store.getState();
  const { user } = currentState.reducer.user;
  const { activeType } = currentState.reducer.compare;

  const { setActiveTypeLoad, setCompareItems } = compareSlice.actions;

  try {
    if (!user) return;

    const data = await removeItemFromCompareByType({
      type: activeType,
      compareId: user.compare,
    });
    console.log('dataa', data);
    const newCompareItems = [...data.compareItems];
    dispatch(setCompareItems(newCompareItems));
    dispatch(setActiveTypeLoad(false));
  } catch (error) {
    console.log(error);
  }
};

export const changeActiveType =
  (el: string) => async (dispatch: AppDispatch) => {
    const currentState = store.getState();
    const { compare } = currentState.reducer.compare;
    const { setActiveType, setInformations } = compareSlice.actions;

    dispatch(setActiveType(el));
    const item = compare?.compareItems.find(
      (ell: ICompareItem) => ell.product.type.name === el
    );
    item && dispatch(setInformations(item.product.information));
  };

export const addToCompareAction =
  (id: string) => async (dispatch: AppDispatch) => {
    const currentState = store.getState();
    const { loaders } = currentState.reducer.product;
    const { user } = currentState.reducer.user;
    const { compare } = currentState.reducer.compare;
    const { setLoaders } = productSlice.actions;
    const { setCompareItems } = compareSlice.actions;

    try {
      if (!user || !compare) return;
      dispatch(setLoaders({ ...loaders, compare: false }));
      const data = await addItemToCompare({
        compareId: user.compare,
        product: id,
      });
      dispatch(setLoaders({ ...loaders, compare: true }));
      const newCompareItems = [...compare.compareItems];
      newCompareItems.push(data);
      dispatch(setCompareItems(newCompareItems));
    } catch (error) {
      console.log(error);
    }
  };

export const removeFromCompare =
  (id: string) => async (dispatch: AppDispatch) => {
    const currentState = store.getState();
    const { loaders } = currentState.reducer.product;
    const { user } = currentState.reducer.user;
    const { setInCompare, setLoaders } = productSlice.actions;
    const { compare } = currentState.reducer.compare;
    const { setCompareItems } = compareSlice.actions;
    try {
      if (!user || !compare) return;

      dispatch(setLoaders({ ...loaders, compare: false }));
      await removeItemFromCompare({ id: id, compareId: user.compare });
      const item = compare.compareItems.find(
        (el: ICompareItem) => el.product._id === id
      );
      if (!item) return;
      const newCompareItems = compare.compareItems.filter(
        (el) => el._id !== item._id
      );
      dispatch(setCompareItems(newCompareItems));
      dispatch(setInCompare(false));
      dispatch(setLoaders({ ...loaders, compare: true }));
    } catch (error) {
      console.log(error);
    }
  };
