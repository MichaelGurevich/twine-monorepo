export interface SignUpCommandParams {
  email: string;
  password: string;
}

export interface SignUpCommandResponse {
  success: boolean;
  session?: string;
  error: string | null;
}

export interface ConfirmSignUpCommandParams {
  email: string;
  confirmationCode: string;
}

export interface ConfirmSignUpCommandResponse {
  success: boolean;
  session?: string;
  error: string | null;
}

export interface AuthState {
  isAuthenticated: boolean;
  session: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  signUp: (params: SignUpCommandParams) => Promise<SignUpCommandResponse>;
}
