export interface DefaultResponse {
  success: boolean;
  error?: string | null;
}

export interface SignUpCommandParams {
  email: string;
  password: string;
}

export interface SignUpCommandResponse extends DefaultResponse {
  session?: string;
}

export interface ConfirmSignUpCommandParams {
  email: string;
  confirmationCode: string;
}

export interface ConfirmSignUpCommandResponse extends DefaultResponse {
  session?: string;
}

export const CONFIRM_SIGNUP_ERROR_MSG = [
  'CodeMismatchException',
  'ExpiredCodeException',
  'TooManyFailedAttemptsException',
];

export interface ResendConfirmationCodeCommandParams {
  email: string;
  confirmationCode: string;
}

export interface ResendConfirmationCodeCommandResponse
  extends DefaultResponse {}

export const RESEND_CONFIRMATION_CODE_ERROR_MSG = [
  'TooManyFailedAttemptsException',
];

export interface AuthState {
  isAuthenticated: boolean;
  session: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  signUp: (params: SignUpCommandParams) => Promise<SignUpCommandResponse>;
  confirmSignUp: (
    params: ConfirmSignUpCommandParams
  ) => Promise<ConfirmSignUpCommandResponse>;
}
