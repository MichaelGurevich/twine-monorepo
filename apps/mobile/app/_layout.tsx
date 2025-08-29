import 'react-native-get-random-values';
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
