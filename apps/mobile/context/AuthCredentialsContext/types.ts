export interface AuthCredentialsContext {
  signInEmail: string;
  signInPassword: string;
  signUpEmail: string;
  signUpPassword: string;
}

export interface AuthCredentialsContextType extends AuthCredentialsContext {
  setSignInEmail: (email: string) => void;
  setSignInPassword: (password: string) => void;
  setSignUpEmail: (email: string) => void;
  setSignUpPassword: (password: string) => void;
}
