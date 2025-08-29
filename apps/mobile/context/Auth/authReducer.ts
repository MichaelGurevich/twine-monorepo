import {
  AuthState,
  TokensData,
} from '../../../../packages/authentication/types';

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  tokensData: undefined,
  isLoading: false,
};

import * as SecureStore from 'expo-secure-store';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

async function save(key: string, value: string) {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    throw error;
  }
}

export type AuthAction =
  | { type: 'SIGN_UP_SUCCESS' }
  | { type: 'SIGN_UP_FAILURE' }
  | { type: 'CONFIRM_SIGN_UP_SUCCESS' }
  | { type: 'CONFIRM_SIGN_UP_FAILURE' }
  | { type: 'RESEND_CONFIRMATION_CODE_SUCCESS' }
  | { type: 'RESEND_CONFIRMATION_CODE_FAILURE' }
  | { type: 'INITIATE_AUTH_SUCCESS_NO_CHALLENGE'; payload: TokensData }
  | { type: 'REFRESH_TOKEN_SUCCESS'; payload: TokensData }
  | { type: 'INITIATE_AUTH_SUCCESS_CHALLENGE_REQUIRED' }
  | { type: 'INITIATE_AUTH_FAILURE' }
  | { type: 'VALIDATE_ACCESS_TOKEN_FAILURE' }
  | { type: 'VALIDATE_ACCESS_TOKEN_SUCCESS' };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'INITIATE_AUTH_SUCCESS_NO_CHALLENGE':
    case 'REFRESH_TOKEN_SUCCESS':
      save(ACCESS_TOKEN, action.payload.accessToken);
      save(REFRESH_TOKEN, action.payload.refreshToken);
      return {
        ...state,
        isAuthenticated: true,
      };

    case 'VALIDATE_ACCESS_TOKEN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      };

    case 'SIGN_UP_SUCCESS':
    case 'SIGN_UP_FAILURE':
    case 'CONFIRM_SIGN_UP_FAILURE':
    case 'RESEND_CONFIRMATION_CODE_SUCCESS':
    case 'RESEND_CONFIRMATION_CODE_FAILURE':
    case 'CONFIRM_SIGN_UP_SUCCESS':
    case 'INITIATE_AUTH_SUCCESS_CHALLENGE_REQUIRED':
    case 'INITIATE_AUTH_FAILURE':
    case 'VALIDATE_ACCESS_TOKEN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
