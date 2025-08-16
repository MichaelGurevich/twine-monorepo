import { AuthProvider } from 'authentication';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
};

export default RootLayout;
