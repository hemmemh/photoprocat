import { $host } from '.';
import { IProduct } from './productApi';

export interface ILoves {
  lovesItems: ILovesItem[];
  user: string;
  _id: string;
}

export interface ILovesItem {
  loves: string;
  product: IProduct;
  _id: string;
}

export const getLoves = async (info: { id: string }) => {
  const { data } = await $host.post<ILoves>('loves/getOne', info);

  return data;
};

export const addProductInLoves = async (info: {
  lovesId: string;
  product: string;
}) => {
  const { data } = await $host.post<ILovesItem>('loves/add', info);

  return data;
};

export const removeProductFromLoves = async (info: {
  id: string;
  lovesId: string;
}) => {
  const { data } = await $host.post<ILovesItem>('loves/remove', info);

  return data;
};
