import { IBasketItem } from '../../https/basketApi';
import { ICompareItem } from '../../https/compareApi';
import { ILovesItem } from '../../https/lovesApi';
import { addRaiting, getOneproduct, IRating } from '../../https/productApi';
import { productSlice } from '../reducers/ProductSlice';
import { AppDispatch, store } from '../store';

export const getProduct = (id: string) => async (dispatch: AppDispatch) => {
  const currentState = store.getState();
  const { basket } = currentState.reducer.basket;
  const { compare } = currentState.reducer.compare;
  const { loves } = currentState.reducer.love;
  const {
    setInCompare,
    setInLoves,
    setInBasket,
    setProduct,
    setRaiting,
    setProductLoad,
  } = productSlice.actions;

  dispatch(setInBasket(false));
  dispatch(setInLoves(false));
  dispatch(setInCompare(false));

  try {
    const prod = await getOneproduct({ id });
    const raiting =
      prod.ratings.reduce(
        (accumulator: number, currentValue: IRating) =>
          accumulator + currentValue.rate,
        0
      ) / prod.ratings.length;
    dispatch(setProduct(prod));
    dispatch(setRaiting(raiting));

    if (basket?.basketItems.find((e: IBasketItem) => e.product?._id === id))
      dispatch(setInBasket(true));
    if (compare?.compareItems.find((e: ICompareItem) => e.product?._id === id))
      dispatch(setInCompare(true));
    if (loves?.lovesItems.find((e: ILovesItem) => e.product?._id === id))
      dispatch(setInLoves(true));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setProductLoad(true));
  }
};

export const addRaitingToProduct =
  (
    id: string,
    raitingModal: number | null,
    sername: string,
    text: string,
    name: string
  ) =>
  async (dispatch: AppDispatch) => {
    const currentState = store.getState();
    const { user } = currentState.reducer.user;
    const { product } = currentState.reducer.product;
    const { setProductRaiting, setModal } = productSlice.actions;
    console.log('$$t');

    try {
      if (!product || !user) return;
      const raiting = await addRaiting({
        user: user.id,
        rate: raitingModal,
        product: id,
        name,
        sername,
        text,
      });
      const newRatings = [...product.ratings];
      newRatings.push(raiting);
      dispatch(setProductRaiting(newRatings));
      dispatch(setModal(false));
    } catch (error) {
      console.log(error);
    }
  };
