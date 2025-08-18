import { AuthState, TokensData } from '../types';

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  tokensData: undefined,
  isLoading: false,
};

export type AuthAction =
  | { type: 'LOADING' }
  | { type: 'SIGN_UP_SUCCESS' }
  | { type: 'SIGN_UP_FAILURE' }
  | { type: 'CONFIRM_SIGN_UP_SUCCESS' }
  | { type: 'CONFIRM_SIGN_UP_FAILURE' }
  | { type: 'RESEND_CONFIRMATION_CODE_SUCCESS' }
  | { type: 'RESEND_CONFIRMATION_CODE_FAILURE' }
  | { type: 'INITIATE_AUTH_SUCCESS_NO_CHALLENGE'; payload: TokensData }
  | { type: 'INITIATE_AUTH_SUCCESS_CHALLENGE_REQUIRED' }
  | { type: 'INITIATE_AUTH_FAILURE' };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'CONFIRM_SIGN_UP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'CONFIRM_SIGN_UP_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'RESEND_CONFIRMATION_CODE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'RESEND_CONFIRMATION_CODE_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'INITIATE_AUTH_SUCCESS_NO_CHALLENGE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };
    case 'INITIATE_AUTH_SUCCESS_CHALLENGE_REQUIRED':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'INITIATE_AUTH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
