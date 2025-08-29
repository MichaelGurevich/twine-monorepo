import { useAuth } from 'authentication';
import { Redirect, Slot } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';

const TOKEN_KEY = 'userToken';

async function getValueFor(key: string) {
  const result = await SecureStore.getItemAsync(key);
  return result;
}

const ProtectedLayout = () => {
  const { isAuthenticated, validateAccessToken } = useAuth();

  useEffect(() => {
    const checkToken = async () => {
      const token = getValueFor(TOKEN_KEY);
      if (token && typeof token === 'string') {
        await validateAccessToken(token);
      }
    };

    checkToken();
  });

  // Redirect to sign in if not authenticated
  if (!isAuthenticated) {
    return <Redirect href='/(public)' />;
  }

  // Render protected routes if authenticated
  return <Slot />;
};

export default ProtectedLayout;
