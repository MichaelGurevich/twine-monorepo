import { Slot } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-get-random-values';
import { AuthProvider, useAuth } from '../context/Auth';
import { loadAccessToken, loadRefreshToken } from '../utils/secureStorage';

const AuthInitializer = () => {
  const { validateAccessToken, refreshToken } = useAuth();

  useEffect(() => {
    const checkToken = async () => {
      const securedAccessToken = await loadAccessToken();
      const securedRefreshToken = await loadRefreshToken();

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
