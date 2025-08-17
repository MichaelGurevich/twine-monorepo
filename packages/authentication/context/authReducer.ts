import { AuthState } from '../types';

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  session: null,
  isLoading: false,
  error: null,
};

export type AuthAction =
  | { type: 'LOADING' }
  | { type: 'SIGN_UP_SUCCESS'; payload: string | null }
  | { type: 'SIGN_UP_FAILURE'; payload: string | null }
  | { type: 'CONFIRM_SIGN_UP_SUCCESS'; payload: string | null }
  | { type: 'CONFIRM_SIGN_UP_FAILURE'; payload: string | null }
  | { type: 'RESEND_CONFIRMATION_CODE_SUCCESS' }
  | { type: 'RESEND_CONFIRMATION_CODE_FAILURE'; payload: string | null };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: null,
        session: action.payload,
      };
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        session: null,
        error: action.payload,
      };
    case 'CONFIRM_SIGN_UP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        session: action.payload,
        error: null,
      };
    case 'CONFIRM_SIGN_UP_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        session: null,
        error: action.payload,
      };
    case 'RESEND_CONFIRMATION_CODE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: null,
      };
    case 'RESEND_CONFIRMATION_CODE_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
