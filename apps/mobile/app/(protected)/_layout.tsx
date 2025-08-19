import { useAuth } from 'authentication';
import { Redirect, Slot } from 'expo-router';

const ProtectedLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return null;
  }

  // Redirect to sign in if not authenticated
  if (!isAuthenticated) {
    return <Redirect href='/(public)' />;
  }

  // Render protected routes if authenticated
  return <Slot />;
};

export default ProtectedLayout;
