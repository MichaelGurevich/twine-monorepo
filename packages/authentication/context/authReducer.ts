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
  | { type: 'SIGN_UP_FAILURE'; payload: string | null };

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
    default:
      return state;
  }
};
