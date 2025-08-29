import { AuthProvider } from 'authentication';
import { Slot } from 'expo-router';
import 'react-native-get-random-values';

const RootLayout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default RootLayout;
