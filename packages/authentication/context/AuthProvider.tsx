import { ReactNode, useReducer } from 'react';
import { AuthContext, authService } from '..';
import {
  AuthContextType,
  ConfirmSignUpCommandParams,
  ConfirmSignUpCommandResponse,
  InitiateAuthCommandParams,
  InitiateAuthCommandResponse,
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

    if (signUpCommandResponse.success) {
      dispatch({ type: 'SIGN_UP_SUCCESS' });
    } else {
      dispatch({ type: 'SIGN_UP_FAILURE' });
    }

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

    if (confirmSignUpResponse.success) {
      dispatch({ type: 'CONFIRM_SIGN_UP_SUCCESS' });
    } else {
      dispatch({
        type: 'CONFIRM_SIGN_UP_FAILURE',
      });
    }

    return confirmSignUpResponse;
  };

  const resendConfirmationCode = async ({
    email,
  }: ResendConfirmationCodeCommandParams): Promise<ResendConfirmationCodeCommandResponse> => {
    dispatch({ type: 'LOADING' });
    const resendConfirmationCodeResponse =
      await authService.resendConfirmationCode({ email });

    if (resendConfirmationCodeResponse.success) {
      dispatch({ type: 'RESEND_CONFIRMATION_CODE_SUCCESS' });
    } else {
      dispatch({
        type: 'RESEND_CONFIRMATION_CODE_FAILURE',
      });
    }

    return resendConfirmationCodeResponse;
  };

  const initiateAuth = async ({
    email,
    password,
  }: InitiateAuthCommandParams): Promise<InitiateAuthCommandResponse> => {
    dispatch({ type: 'LOADING' });
    const initiateAuthCommandResponse = await authService.initiateAuth({
      email,
      password,
    });

    const { success, tokens, challenge } = initiateAuthCommandResponse;

    if (success) {
      if (tokens) {
        dispatch({
          type: 'INITIATE_AUTH_SUCCESS_NO_CHALLENGE',
          payload: tokens,
        });
      }
      if (challenge) {
        dispatch({
          type: 'INITIATE_AUTH_SUCCESS_CHALLENGE_REQUIRED',
        });
      }
    } else {
      dispatch({
        type: 'INITIATE_AUTH_FAILURE',
      });
    }

    return initiateAuthCommandResponse;
  };

  const value: AuthContextType = {
    ...authState,
    signUp,
    confirmSignUp,
    resendConfirmationCode,
    initiateAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
