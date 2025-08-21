import { useContext } from 'react';
import { AuthCredentialsContext } from './AuthCredentialsContext';
import { AuthCredentialsContextType } from './types';

export const useAuthCredentials = (): AuthCredentialsContextType => {
  const context = useContext(AuthCredentialsContext);
  if (context === undefined) {
    throw new Error(
      'useAuthCredentials must be used within an AuthCredentialsProvider'
    );
  }

  return context;
};
