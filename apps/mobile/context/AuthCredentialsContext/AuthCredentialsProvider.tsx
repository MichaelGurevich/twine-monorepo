import React, { ReactNode, useState } from 'react';
import { AuthCredentialsContext } from './AuthCredentialsContext';
import { AuthCredentialsContextType } from './types';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthCredentialsProvider = ({ children }: AuthProviderProps) => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const value: AuthCredentialsContextType = {
    signInEmail,
    signInPassword,
    signUpEmail,
    signUpPassword,
    setSignInEmail,
    setSignInPassword,
    setSignUpEmail,
    setSignUpPassword,
  };

  return (
    <AuthCredentialsContext.Provider value={value}>
      {children}
    </AuthCredentialsContext.Provider>
  );
};
