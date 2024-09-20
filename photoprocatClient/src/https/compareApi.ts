import { $host } from '.';
import { IProduct } from './productApi';

export interface ICompare {
  compareItems: ICompareItem[];
  user: string;
  _id: string;
}

export interface ICompareItem {
  compare: string;
  product: IProduct;
  _id: string;
}

export const addItemToCompare = async (info: {
  compareId: string;
  product: string;
}) => {
  const { data } = await $host.post<ICompareItem>('compare/add', info);

  return data;
};

export const getCompare = async (info: { id: string }) => {
  const { data } = await $host.post<ICompare>('compare/getOne', info);

  return data;
};

export const removeItemFromCompare = async (info: {
  id: string;
  compareId: string;
}) => {
  const { data } = await $host.post<ICompareItem>('compare/remove', info);

  return data;
};

export const removeItemFromCompareByType = async (info: {
  type: string;
  compareId: string;
}) => {
  const { data } = await $host.post<ICompare>('compare/removeByType', info);

  return data;
};
