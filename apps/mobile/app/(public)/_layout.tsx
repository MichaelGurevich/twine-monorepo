import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../context/Auth';
import { AuthCredentialsProvider } from '../../context/AuthCredentialsContext/AuthCredentialsProvider';

const PublicLayout = () => {
  const { isAuthenticated } = useAuth();

  // Redirect to protected area if already authenticated
  if (isAuthenticated) {
    return <Redirect href='/(protected)/(tabs)' />;
  }

  // Render public routes if not authenticated
  return (
    <AuthCredentialsProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthCredentialsProvider>
  );
};

export default PublicLayout;
