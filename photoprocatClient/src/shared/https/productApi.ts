import { $host } from '.';
import { IBrand } from './brandsApi';
import { IType } from './typesApi';

export interface IProduct {
  brand: IBrand;
  date?: string;
  description?: string;
  images: string;
  information: Array<IInformation>;
  name?: string;
  price: number;
  purchaseNumber?: number;
  ratings: IRating[];
  type: IType;
  _id: string;
}
export interface IProducts {
  count?: number;
  responce: Array<IProduct>;
  responseForInformations: Array<IProduct>;
  type: IType | null;
  responceAll: Array<IProduct>;
}

export interface IRating {
  name: string;
  rate: number;
  sername: string;
  text: string;
  user: string;
  _id: string;
}

export interface IInformation {
  description: string;
  name: string;
  _id: string;
}

export const getAllproduct = async (
  typeId: string | null = null,
  page: string | null = null,
  limit: string | null = null,
  search: string | null = null,
  checkedBrands: string | null = null,
  sortNumber: string | null = null,
  minPrice: number | null = null,
  maxPrice: number | null = null,
  sort: string | null = null,
  informations: string | null = null,
  typeInformation: string | null = null
) => {
  console.log(typeId, page, 'yy');
  const { data } = await $host.get<IProducts>('product/getAll', {
    params: {
      typeId,
      page,
      limit,
      search,
      checkedBrands,
      sortNumber,
      minPrice,
      maxPrice,
      sort,
      informations,
      typeInformation,
    },
  });

  return data;
};

export const getOneproduct = async (id: { id: string }) => {
  const { data } = await $host.post<IProduct>('product/getOne', id);

  return data;
};

export const addRaiting = async (info: {
  user: string;
  rate: number | null;
  product: string;
  name: string;
  sername: string;
  text: string;
}) => {
  const { data } = await $host.post<IRating>('rating', info);

  return data;
};

export const change = async (info: { id: string; purchase: number }) => {
  const { data } = await $host.post<IProduct>('product/change', info);

  return data;
};

export const getByPurchase = async () => {
  const { data } = await $host.post<Array<IProduct>>('product/getByPurchase');

  return data;
};
