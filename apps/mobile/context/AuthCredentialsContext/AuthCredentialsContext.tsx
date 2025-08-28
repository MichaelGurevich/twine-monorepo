import { createContext } from 'react';
import { AuthCredentialsContextType } from './types';

export const AuthCredentialsContext = createContext<
  AuthCredentialsContextType | undefined
>(undefined);
