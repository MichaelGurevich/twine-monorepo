import { useAuth } from 'authentication';
import { Redirect, Stack } from 'expo-router';
import { AuthThemeProvider } from '../../contexts/auth/AuthThemeContext';
import { AuthCredentialsProvider } from '../../contexts/authCredentials/AuthCredentialsProvider';

const PublicLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return null;
  }

  // Redirect to protected area if already authenticated
  if (isAuthenticated) {
    return <Redirect href='/(protected)/(tabs)' />;
  }

  // Render public routes if not authenticated
  return (
    <AuthThemeProvider>
      <AuthCredentialsProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthCredentialsProvider>
    </AuthThemeProvider>
  );
};

export default PublicLayout;
