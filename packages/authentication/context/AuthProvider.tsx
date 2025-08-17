import { ReactNode, useReducer } from 'react';
import { AuthContext, authService } from '..';
import {
  AuthContextType,
  ConfirmSignUpCommandParams,
  ConfirmSignUpCommandResponse,
  ResendConfirmationCodeCommandParams,
  ResendConfirmationCodeCommandResponse,
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
      ? dispatch({ type: 'SIGN_UP_SUCCESS', payload: session ?? null })
      : dispatch({ type: 'SIGN_UP_FAILURE', payload: error ?? null });

    return signUpCommandResponse;
  };

  const confirmSignUp = async ({
    email,
    confirmationCode,
  }: ConfirmSignUpCommandParams): Promise<ConfirmSignUpCommandResponse> => {
    dispatch({ type: 'LOADING' });
    const confirmSignUpResponse = await authService.confirmSignUp({
      email,
      confirmationCode,
    });
    const { success, session, error } = confirmSignUpResponse;

    success
      ? dispatch({ type: 'CONFIRM_SIGN_UP_SUCCESS', payload: session ?? null })
      : dispatch({ type: 'CONFIRM_SIGN_UP_FAILURE', payload: error ?? null });

    return confirmSignUpResponse;
  };

  const resendConfirmationCode = async ({
    email,
  }: ResendConfirmationCodeCommandParams): Promise<ResendConfirmationCodeCommandResponse> => {
    dispatch({ type: 'LOADING' });
    const resendConfirmationCodeResponse =
      await authService.resendConfirmationCode({ email });

    const { success, error } = resendConfirmationCodeResponse;

    if (success) {
      dispatch({ type: 'RESEND_CONFIRMATION_CODE_SUCCESS' });
    } else {
      dispatch({
        type: 'RESEND_CONFIRMATION_CODE_FAILURE',
        payload: error ?? null,
      });
    }

    return resendConfirmationCodeResponse;
  };

  const value: AuthContextType = {
    ...authState,
    signUp,
    confirmSignUp,
    resendConfirmationCode,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
