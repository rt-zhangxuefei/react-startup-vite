import axios, { type AxiosError } from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15_000
});

/** 业务接入登录态后在此返回 token */
function getAuthToken(): string {
  return '';
}

request.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.TOKEN = token;
  }
  return config;
});

request.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error)
);

export default request;
