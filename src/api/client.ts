import axios from "axios";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: 'http://10.10.11.191:8080/api/v1',
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status === 401) {
      await SecureStore.deleteItemAsync("token");
    }
    return Promise.reject(err);
  }
);

export default api;
