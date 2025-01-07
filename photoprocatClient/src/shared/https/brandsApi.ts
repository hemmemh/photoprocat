import { $host } from '.';

export interface IBrand {
  image?: string;
  name?: string;
  products?: [];
  _id: string;
}

export const getAllBrands = async () => {
  const { data } = await $host.post<IBrand[]>('brand/getAll');

  return data;
};
