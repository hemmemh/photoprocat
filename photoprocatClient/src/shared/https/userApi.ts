import { $authHost, $host } from '.';

export interface IUser {
  id: string;
  mail: string;
  password: string;
  name: string;
  sername: string;
  birthDate: string;
  tell: string;
  activationLink: string;
  isActivated: boolean;
  token: string;
  basket: string;
  loves: string;
  compare: string;
  orders: string;
  ratings: string[];
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}

export interface ILogin {
  mail: string;
  password: string;
}

export const registration = async (info: {
  mail: string;
  password: string;
}) => {
  const { data } = await $host.post<IToken>('user/registration', info);

  return data;
};

export const login = async (info: { mail: string; password: string }) => {
  const { data } = await $host.post<IToken>('user/login', info, {
    withCredentials: true,
  });

  return data;
};

export const logout = async () => {
  const { data } = await $authHost.post<IToken>('user/logout', {
    withCredentials: true,
  });

  return data;
};

export const forgetPassword = async (info: { email: string }) => {
  const { data } = await $host.post<IUser>('user/forgetPassword', info);

  return data;
};

export const forgetPassword2 = async (info: {
  password: string;
  code: string;
}) => {
  const { data } = await $host.post<IUser>('user/forgetPassword2', info);

  return data;
};

export const refresh = async () => {
  const { data } = await $host.post<IToken>(`user/refresh`);

  return data;
};

export const changeUser = async (info: {
  id: string;
  name: string;
  serName: string;
  birthDate: string;
  tell: string;
}) => {
  const { data } = await $host.post<IUser>(`user/change`, info);

  return data;
};
