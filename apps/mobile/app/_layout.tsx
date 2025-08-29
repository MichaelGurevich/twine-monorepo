import { Slot } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';
import 'react-native-get-random-values';
import { AuthProvider, useAuth } from '../context/Auth';

const REFRESH_TOKEN = 'refreshToken';
const ACCESS_TOKEN = 'accessToken';

async function load(key: string): Promise<string | null> {
  try {
    const value = await SecureStore.getItemAsync(key);
    if (value) {
      return value;
    }
    return null;
  } catch (error) {
    if (typeof error === 'string') return error;
    return null;
  }
}

const AuthInitializer = () => {
  const { validateAccessToken, refreshToken } = useAuth();

  useEffect(() => {
    const checkToken = async () => {
      const securedAccessToken = await load(ACCESS_TOKEN);
      const securedRefreshToken = await load(REFRESH_TOKEN);

      if (securedAccessToken) {
        const validateAccessTokenResponse =
          await validateAccessToken(securedAccessToken);
        const { success, isValid } = validateAccessTokenResponse;
        if (success && !isValid) {
          if (securedRefreshToken) {
            await refreshToken(securedRefreshToken);
          }
        }
      }
    };

    checkToken();
  }, [validateAccessToken, refreshToken]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <AuthProvider>
      <AuthInitializer />
    </AuthProvider>
  );
};

export default RootLayout;
