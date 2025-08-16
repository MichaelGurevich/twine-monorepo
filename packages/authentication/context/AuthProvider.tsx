import { ReactNode, useReducer } from 'react';
import { AuthContext, authService } from '..';
import {
  AuthContextType,
  SignUpCommandParams,
  SignUpCommandResponse,
} from '../types';
import { authReducer, initialAuthState } from './authReducer';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const signUp = async ({
    email,
    password,
  }: SignUpCommandParams): Promise<SignUpCommandResponse> => {
    dispatch({ type: 'LOADING' });
    const signUpCommandResponse: SignUpCommandResponse =
      await authService.signUp({ email, password });

    const { success, session, error } = signUpCommandResponse;

    success
      ? dispatch({ type: 'SIGN_UP_SUCCESS', payload: session })
      : dispatch({ type: 'SIGN_UP_FAILURE', payload: error });

    return signUpCommandResponse;
  };

  const value: AuthContextType = {
    ...authState,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
