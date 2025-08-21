import { AuthProvider } from 'authentication';
import { Slot } from 'expo-router';
import { AuthThemeProvider } from '../contexts/auth/AuthThemeContext';

const RootLayout = () => {
  return (
    <AuthProvider>
      <AuthThemeProvider>
        <Slot />
      </AuthThemeProvider>
    </AuthProvider>
  );
};

export default RootLayout;
