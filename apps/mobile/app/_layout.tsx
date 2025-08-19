import { AuthProvider } from 'authentication';
import { Slot } from 'expo-router';

const RootLayout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default RootLayout;
