import {
  ApiResponse,
  AuthResponse,
  SignInDto,
  SignUpDto,
} from '@/features/auth/types';
import { authService } from '@/lib/auth-service';
import { storage } from '@/lib/storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type User = {
  id: string | number;
  name: string;
  email: string;
  role?: string;
  zuoraApproverId?: string;
} | null;

type AuthState = {
  user: User;
  accessToken: string | null;
  loading: boolean;
  signIn: (dto: SignInDto) => Promise<void>;
  signUp: (dto: SignUpDto) => Promise<void>;
  signOut: () => Promise<void>;
  setAccessToken: (token: string | null) => void;
  updateUser: (u: Partial<User>) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      loading: false,

      signIn: async (dto) => {
        set({ loading: true });
        try {
          const res: ApiResponse<AuthResponse> = await authService.login(dto);
          set({
            user: res.data.user,
            accessToken: res.data.token,
          });
        } catch (err) {
          console.error('Login failed:', err);
          throw err;
        } finally {
          set({ loading: false });
        }
      },

      signUp: async (dto) => {
        set({ loading: true });
        try {
          const res: ApiResponse<AuthResponse> = await authService.register(
            dto,
          );
          set({
            user: res.data.user,
            accessToken: res.data.token, // optional: save token if backend returns after signup
          });
        } catch (err) {
          console.error('Signup failed:', err);
          throw err;
        } finally {
          set({ loading: false });
        }
      },

      signOut: async () => {
        set({ user: null, accessToken: null });
      },

      setAccessToken: (token) => set({ accessToken: token }),
      updateUser: (u) => set({ user: { ...(get().user || {}), ...u } as any }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => ({
        getItem: storage.getItem,
        setItem: storage.setItem,
        removeItem: storage.removeItem,
      })),
    },
  ),
);
