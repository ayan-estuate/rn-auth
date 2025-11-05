export type SignInDto = { email: string; password: string };
export type SignUpDto = { name: string; email: string; password: string };
export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: { id: string; name: string; email: string };
};
