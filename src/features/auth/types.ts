// Common API response wrapper
export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  timestamp: string | null;
};

// User model (from backend)
export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  zuoraApproverId?: string;
};

// Authentication DTOs (request payloads)
export type SignInDto = {
  email: string;
  password: string;
};

export type SignUpDto = {
  name: string;
  email: string;
  password: string;
};

// AuthResponse (actual data inside ApiResponse)
export type AuthResponse = {
  user: User;
  token: string;
};
