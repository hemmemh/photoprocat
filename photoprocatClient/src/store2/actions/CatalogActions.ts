import { getAllBrands } from '../../https/brandsApi';
import {
  getAllproduct,
  getByPurchase,
  IInformation,
  IProducts,
} from '../../https/productApi';
import { catalogSlice } from '../reducers/CatalogSlice';
import { AppDispatch, store } from '../store';
import {
  IActions,
  IInformationValuesConst,
  ISlideMouseOneConst,
  ITypeInformation,
  ItypeInformationConst,
} from '../../utils/interfaces';
import { isStringArray } from '../../utils/guards/guards';

export const getAllInfo =
  (action: IActions) => async (dispatch: AppDispatch) => {
    const currentState = store.getState();
    const { checkedBrands, products } = currentState.reducer.catalog;
    const {
      setBrands,
      setBrandsLoad,
      setCheckedBrands,
      setProducts,
      setPage,
      setType,
    } = catalogSlice.actions;
    const {
      newType,
      newPage,
      limit,
      search,
      newcheckedBrands,
      newSortNumber,
      minPrice,
      maxPrice,
      newSort,
      newInformationValues,
      newTypeInformation,
    } = action;
    try {
      const data = await getAllproduct(
        newType,
        newPage,
        limit,
        search,
        newcheckedBrands,
        newSortNumber,
        minPrice,
        maxPrice,
        newSort,
        newInformationValues,
        newTypeInformation
      );
      if (!data.type) return;
      dispatch(setProducts({ ...data }));
      dispatch(setType(data.type));
      dispatch(setPage(+newPage));
      dispatch(changeInformations(data, action));

      const brands = await getAllBrands();
      dispatch(setBrands(brands));
      dispatch(setBrandsLoad(true));

      const newCheckedBrands = JSON.parse(newcheckedBrands);

      if (newCheckedBrands.length !== 0) {
        dispatch(setCheckedBrands(newCheckedBrands));
      } else {
        dispatch(setCheckedBrands(checkedBrands));
      }

      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

export const getProducts =
  (action: IActions) => async (dispatch: AppDispatch) => {
    try {
      const currentState = store.getState();
      const { type } = currentState.reducer.catalog;
      const { setProducts, setProductsLoad, setPage, setType } =
        catalogSlice.actions;
      const {
        newType,
        newPage,
        limit,
        search,
        newcheckedBrands,
        newSortNumber,
        minPrice,
        maxPrice,
        newSort,
        newInformationValues,
        newTypeInformation,
      } = action;
      dispatch(setProductsLoad(true));
      dispatch(setPage(+newPage));

      const data = await getAllproduct(
        newType,
        newPage,
        limit,
        search,
        newcheckedBrands,
        newSortNumber,
        minPrice,
        maxPrice,
        newSort,
        newInformationValues,
        newTypeInformation
      );
      if (!data.type) return;

      if (type?._id !== data.type._id) {
        dispatch(changeInformations(data, action));
      }

      dispatch(setProducts({ ...data }));
      dispatch(setType(data.type));
      dispatch(setProductsLoad(true));
    } catch (error) {
      console.log('err', error);
    }
  };

export const chooseBrand = (e: string) => async (dispatch: AppDispatch) => {
  const currentState = store.getState();
  const { checkedBrands } = currentState.reducer.catalog;
  const { setCheckedBrands } = catalogSlice.actions;
  if (checkedBrands.includes(e)) {
    dispatch(setCheckedBrands([...checkedBrands.filter((el) => el !== e)]));
  } else {
    dispatch(setCheckedBrands([...checkedBrands, e]));
  }
};

export const changeInformations =
  (data: IProducts, action: IActions) => async (dispatch: AppDispatch) => {
    try {
      const {
        setProductsLoad,
        setTypeInformation,
        setInformations,
        setInformationValues,
        setsliderMouseOn,
      } = catalogSlice.actions;
      const { newInformationValues } = action;
      dispatch(setInitialPrice(data));

      const {
        informationValuesConst,
        informationsConst,
        slideMouseOneConst,
        typeInformationConst,
      } = buildInformationsData(data);

      dispatch(setInformations(informationsConst));

      dispatch(setsliderMouseOn(slideMouseOneConst));

      const newInformationValuesConst = Object.keys(
        JSON.parse(newInformationValues)
      );

      if (newInformationValuesConst.length !== 0) {
        dispatch(setInformationValues(JSON.parse(newInformationValues)));
      } else {
        dispatch(setInformationValues(informationValuesConst));
      }

      dispatch(setTypeInformation(typeInformationConst));
      dispatch(setProductsLoad(true));
    } catch (error) {
      console.log('err', error);
    }
  };

export const putProductsInSlides = () => async (dispatch: AppDispatch) => {
  const currentState = store.getState();
  const { products } = currentState.reducer.catalog;
  const { setProducts } = catalogSlice.actions;

  try {
    const productsPur = await getByPurchase();
    dispatch(setProducts({ ...products, responce: productsPur }));
  } catch (error) {
    console.log(error);
  }
};

const setInitialPrice = (data: IProducts) => async (dispatch: AppDispatch) => {
  const { setPriceRange, setMinMaxPrice, setPriceValue } = catalogSlice.actions;

  let price: number[] = [];
  data.responseForInformations.forEach((el) => price.push(Number(el.price)));
  price = price.sort((a, b) => a - b);

  dispatch(setMinMaxPrice([price[0], price[price.length - 1]]));
  dispatch(setPriceRange([price[0], price[price.length - 1]]));
  dispatch(setPriceValue([price[0], price[price.length - 1]]));
};

const buildInformationsData = (data: IProducts) => {
  let typeInformationConst: ItypeInformationConst = {};
  let informationValuesConst: IInformationValuesConst = {};
  let informationsConst: IInformation[] = [];
  let slideMouseOneConst: ISlideMouseOneConst = {};

  for (const it of JSON.parse(
    data.responseForInformations[0].type.informations
  )) {
    let val: string | number[] = 'неважно';
    const type = Object.entries(it)[0][1] as ITypeInformation;
    const value = Object.entries(it)[0][0];

    if (type == 'check') {
      val = [];
    } else if (type == 'slider') {
      val = [0, 0];
      slideMouseOneConst = { ...slideMouseOneConst, [value]: [0, 0] };
    }

    typeInformationConst = { ...typeInformationConst, [value]: type };
    informationValuesConst = { ...informationValuesConst, [value]: val };
  }

  for (const it of data.responseForInformations) {
    informationsConst = [...informationsConst, ...it.information];
  }

  console.log('dd', informationsConst);

  Object.entries(typeInformationConst).map((el) => {
    const type = el[1];
    const typeName = el[0];
    let arr: (string | number)[] = [];
    arr = [
      ...informationsConst
        .filter((fil) => fil.name == typeName)
        .map((ee) => ee.description),
    ];
    arr = arr.filter((fil, pos) => arr.indexOf(fil) === pos);

    if (type == 'slider') {
      if (arr.length === 1) {
        informationValuesConst = {
          ...informationValuesConst,
          [typeName]: [0, Number(arr.sort((a, b) => +b - +a)[0])],
        };
        slideMouseOneConst = {
          ...slideMouseOneConst,
          [typeName]: [0, Number(arr.sort((a, b) => +b - +a)[0])],
        };
      } else {
        informationValuesConst = {
          ...informationValuesConst,
          [typeName]: [
            Number(arr.sort((a, b) => +a - +b)[0]),
            Number(arr.sort((a, b) => +b - +a)[0]),
          ],
        };
        slideMouseOneConst = {
          ...slideMouseOneConst,
          [typeName]: [
            Number(arr.sort((a, b) => +a - +b)[0]),
            Number(arr.sort((a, b) => +b - +a)[0]),
          ],
        };
      }
    } else if (type == 'check' && isStringArray(arr)) {
      informationValuesConst = {
        ...informationValuesConst,
        [typeName]: [...arr],
      };
    } else if (isStringArray(arr)) {
      arr.unshift('неважно');
      informationValuesConst = {
        ...informationValuesConst,
        [typeName]: arr[0],
      };
    }
  });
  console.log('informationValuesConst', informationValuesConst);

  return {
    typeInformationConst,
    informationValuesConst,
    informationsConst,
    slideMouseOneConst,
  };
};
