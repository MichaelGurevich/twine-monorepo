export interface AuthCredentials {
  signInEmail: string | undefined;
  signUpEmail: string | undefined;
  signInPassword: string | undefined;
  signUpPassword: string | undefined;
}

export interface AuthCredentialsContextType extends AuthCredentials {
  setSignInEmailHandler: (email: string) => void;
  setSignUpEmailHandler: (email: string) => void;
  setSignInPasswordHandler: (password: string) => void;
  setSignUpPasswordHandler: (password: string) => void;
}
