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
}

export interface ResendConfirmationCodeCommandResponse
  extends DefaultResponse {}

export const RESEND_CONFIRMATION_CODE_ERROR_MSG = [
  'TooManyFailedAttemptsException',
];

export const AUTH_FLOW = 'USER_PASSWORD_AUTH';
export interface InitiateAuthCommandParams {
  email: string;
  password: string;
}

export interface InitiateAuthCommandResponse extends DefaultResponse {
  challenge: string | undefined;
  tokens?: TokensData;
}

export interface TokensData {
  accessToken: string;
  refreshToken: string;
  idToken: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  tokensData?: TokensData;
  isLoading: boolean;
}

export interface ValidateAccessTokenResponse extends DefaultResponse {
  isValid: boolean;
  username?: string;
}

export interface RefreshTokenResponse extends DefaultResponse {
  tokens?: TokensData;
}

export interface SignOutCommandParams {
  accessToken: string;
}

export interface SignOutCommandResponse extends DefaultResponse {}

export interface AuthContextType extends AuthState {
  signUp: (params: SignUpCommandParams) => Promise<SignUpCommandResponse>;
  confirmSignUp: (
    params: ConfirmSignUpCommandParams
  ) => Promise<ConfirmSignUpCommandResponse>;
  resendConfirmationCode: (
    params: ResendConfirmationCodeCommandParams
  ) => Promise<ResendConfirmationCodeCommandResponse>;

  initiateAuth: (
    params: InitiateAuthCommandParams
  ) => Promise<InitiateAuthCommandResponse>;

  validateAccessToken: (
    accessToken: string
  ) => Promise<ValidateAccessTokenResponse>;

  refreshToken: (refreshToken: string) => Promise<RefreshTokenResponse>;

  signOut: (params: SignOutCommandParams) => Promise<SignOutCommandResponse>;
}
