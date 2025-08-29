import { Redirect, Slot } from 'expo-router';
import { useAuth } from '../../context/Auth';

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();

  // Redirect to sign in if not authenticated
  if (!isAuthenticated) {
    return <Redirect href='/(public)' />;
  }

  // Render protected routes if authenticated
  return <Slot />;
};

export default ProtectedLayout;
