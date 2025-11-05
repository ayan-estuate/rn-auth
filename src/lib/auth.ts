import { API_URL } from '@/config/env';
import { useAuthStore } from '@/store/auth-store';
import axios from 'axios';

export async function refreshAccessToken() {
  const refreshToken = useAuthStore.getState().refreshToken;
  if (!refreshToken) throw new Error('No refresh token');
  const res = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
  const { accessToken, user } = res.data;
  useAuthStore.getState().setAccessToken(accessToken);
  if (user) useAuthStore.getState().updateUser(user);
  return accessToken as string;
}
