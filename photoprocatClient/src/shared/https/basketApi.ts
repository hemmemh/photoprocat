import { $host } from '.';
import { IProduct } from './productApi';

export interface IBasket {
  basketItems: Array<IBasketItem>;
  user?: string;
  _id?: string;
}

export interface IBasketItem {
  basket: string;
  count: number;
  product: IProduct;
  _id: string;
}

export interface IOrder {
  ordersItems: Array<IOrderItem>;
  user: string;
  _id: string;
}

export interface IOrderItem {
  date: string;
  number: number;
  orders: string;
  ordersItemProduct: IOrdersItemProduct[];
  price: number;
  _id: string;
}

export interface IOrdersItemProduct {
  amount: number;
  orderItem: string;
  product: IProduct;
  _id: string;
}

export const getBasket = async (info: { id: string }) => {
  const { data } = await $host.post<IBasket>('basket/getOne', info);

  return data;
};

export const addItemToBasket = async (info: {
  basketId: string;
  product: string;
  count: number;
}) => {
  const { data } = await $host.post<IBasketItem>('basket/add', info);

  return data;
};

export const removeItemFromBasket = async (info: {
  id: string;
  basketId: string;
}) => {
  const { data } = await $host.post<IBasketItem>('basket/remove', info);

  return data;
};

export const changeAmount = async (info: { id: string; count: number }) => {
  const { data } = await $host.post<IBasketItem>('basket/change', info);

  return data;
};

export const addOrder = async (info: {
  ordersId: string;
  price: number;
  products: string;
}) => {
  const { data } = await $host.post<IOrderItem>('order/add', info);

  return data;
};

export const removeAll = async (info: { id: string }) => {
  const { data } = await $host.post<IBasket>('basket/removeAll', info);

  return data;
};

export const getOrder = async (info: { id: string }) => {
  const { data } = await $host.post<IOrder>('order/getAll', info);

  return data;
};
