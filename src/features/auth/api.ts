import { api } from '@/lib/api-client';
import { AuthResponse, SignInDto, SignUpDto } from './types';

export async function signIn(dto: SignInDto): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>('/auth/login', dto);
  return data;
}

export async function signUp(dto: SignUpDto): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>('/auth/register', dto);
  return data;
}




export async function forgotPassword(email: string) {
  return api.post('/auth/forgot-password', { email });
}
