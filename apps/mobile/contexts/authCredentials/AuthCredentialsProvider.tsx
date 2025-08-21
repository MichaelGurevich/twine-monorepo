import React, { ReactNode, useState } from 'react';
import { AuthCredentialsContext } from './AuthCredentialsContext';
import { AuthCredentialsContextType } from './types';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthCredentialsProvider = ({ children }: AuthProviderProps) => {
  const [signInEmail, setSignInEmail] = useState<string | undefined>(undefined);
  const [signUpEmail, setSignUpEmail] = useState<string | undefined>(undefined);
  const [signInPassword, setSignInPassword] = useState<string | undefined>(
    undefined
  );
  const [signUpPassword, setSignUpPassword] = useState<string | undefined>(
    undefined
  );

  const setSignInEmailHandler = (email: string) => {
    setSignInEmail(email);
  };
  const setSignUpEmailHandler = (email: string) => {
    setSignUpEmail(email);
  };
  const setSignInPasswordHandler = (password: string) => {
    setSignInPassword(password);
  };

  const setSignUpPasswordHandler = (password: string) => {
    setSignUpPassword(password);
  };

  const value: AuthCredentialsContextType = {
    signInEmail,
    signUpEmail,
    signInPassword,
    signUpPassword,
    setSignInEmailHandler,
    setSignUpEmailHandler,
    setSignInPasswordHandler,
    setSignUpPasswordHandler,
  };

  return (
    <AuthCredentialsContext.Provider value={value}>
      {children}
    </AuthCredentialsContext.Provider>
  );
};
