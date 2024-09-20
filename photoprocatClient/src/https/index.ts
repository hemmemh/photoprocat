import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_URL } from '../utils/config';
import Cookies from 'js-cookie';

const $host = axios.create({
  baseURL: API_URL + '/api',
  withCredentials: true,
});

const $authHost = axios.create({
  baseURL: API_URL + '/api',
  withCredentials: true,
});

$authHost.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  if (!request.headers) return request;
  request.headers.Authorization = `Bearer ${Cookies.get('refreshToken')}`;

  return request;
});

$host.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('err', error);

    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - 401');
    }
  }
);

$authHost.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await $host.post(`user/refresh`);
        localStorage.setItem('auth', 'true');

        return $authHost.request(originalRequest);
      } catch (error) {
        console.log('Не авторизован', error);
      }
    }
  }
);

export { $host, $authHost };
