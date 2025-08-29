import { createContext } from 'react';
import { AuthContextType } from '../../../../packages/authentication/types';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
