'use client'
import { useContext, useState } from 'react';
import { User } from '@/lib/interfaces';
import { AuthContext } from '../authContext';

// In-memory token storage
let accessToken: string | null = null;

// Token manager
export const tokenManager = {
  setToken(token: string) {
    accessToken = token;
  },
  getToken(): string | null {
    return accessToken;
  },
  clearToken() {
    accessToken = null;
  },
};


// Auth Provider Component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [auth, setAuth] = useState<{ user: User | null; token: string } | null>(null);
 
  return (
    <AuthContext.Provider value={{ user, setUser,auth,setAuth}}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}
