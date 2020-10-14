import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface SignCredentials {
  email: string;
  password: string;
}
interface AuthContextState {
  name: string;
  signIn(credentials: SignCredentials): Promise<void>;
}

interface AuthState {
  token: string;
  user: object;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Dantas', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};