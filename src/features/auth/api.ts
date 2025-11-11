import { api } from '@/lib/api-client';
import { AuthResponse, SignInDto, SignUpDto, ApiResponse } from './types';

export async function signIn(dto: SignInDto): Promise<ApiResponse<AuthResponse>> {
  const { data } = await api.post<ApiResponse<AuthResponse>>('/auth/login', dto);
  return data; // this now includes success, message, data, timestamp
}

export async function signUp(dto: SignUpDto): Promise<ApiResponse<AuthResponse>> {
  console.log('Calling backend:', `${api.defaults.baseURL}/auth/signup`, dto);
  const { data } = await api.post<ApiResponse<AuthResponse>>('/auth/signup', dto);
  return data;
}

export async function forgotPassword(email: string) {
  return api.post('/auth/forgot-password', { email });
}
