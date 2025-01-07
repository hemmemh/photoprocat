import { $host } from '.';

export interface INews {
  _id: string;
  image: string;
  date: string;
  title: string;
  text: string;
  comments: IComment[];
}

export interface IComment {
  _id: string;
  name: string;
  sername: string;
  text: string;
  news: string;
}

export const addNews = async (info: FormData) => {
  const { data } = await $host.post('news', info);

  return data;
};

export const getAllNews = async () => {
  const { data } = await $host.post('news/getAll');

  return data;
};

export const addComment = async (info: {
  name: string;
  sername: string;
  text: string;
  news: string;
}) => {
  const { data } = await $host.post('news/addComment', info);

  return data;
};
