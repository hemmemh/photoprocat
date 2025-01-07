import { $host } from '.';

export interface IType {
  name: string;
  informations: string;
  products: [];
  _id: string;
}

export const getAllTypes = async () => {
  const { data } = await $host.post<IType[]>('type/getAll');

  return data;
};

export const createType = async (info: {
  name: string;
  informations: string;
}) => {
  const { data } = await $host.post<IType>('type', info);

  return data;
};
