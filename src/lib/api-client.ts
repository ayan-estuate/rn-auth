import { API_URL } from '@/config/env';
import { refreshAccessToken } from '@/lib/auth';
import { useAuthStore } from '@/store/auth-store';
import * as Sentry from '@sentry/react-native';
import axios from 'axios';

export const api = axios.create({ baseURL: API_URL, timeout: 15000 });

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

let refreshing: Promise<string> | null = null;

api.interceptors.response.use(
  (r) => r,
  async (error) => {
    const original = error.config;
    if (error?.response?.status === 401 && !original?._retry) {
      original._retry = true;
      try {
        refreshing ||= refreshAccessToken();
        const token = await refreshing;
        refreshing = null;
        original.headers.Authorization = `Bearer ${token}`;
        return api(original);
      } catch (e) {
        refreshing = null;
        useAuthStore.getState().signOut();
      }
    }
    // optional: capture in Sentry (if configured)
    if (typeof Sentry?.captureException === 'function')
      Sentry.captureException(error);
    return Promise.reject(error);
  },
);
