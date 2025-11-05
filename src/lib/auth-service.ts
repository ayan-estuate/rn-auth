import { signIn, signUp } from '@/features/auth/api';

export const authService = {
  login: signIn,
  register: signUp,
};
