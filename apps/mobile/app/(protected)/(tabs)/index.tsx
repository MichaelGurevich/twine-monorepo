import * as SecureStore from 'expo-secure-store';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../../context/Auth';

const ACCESS_TOKEN = 'accessToken';

async function load(key: string): Promise<string | null> {
  try {
    const value = await SecureStore.getItemAsync(key);
    if (value) {
      return value;
    }
    return null;
  } catch (error) {
    if (typeof error === 'string') return error;
    return null;
  }
}

const HomePage = () => {
  const { signOut } = useAuth();

  const handleOnPress = async () => {
    const securedAccessToken = await load(ACCESS_TOKEN);
    if (securedAccessToken) {
      signOut({ accessToken: securedAccessToken });
    }
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <Text>Home</Text>
      <Button title='Sign Out' onPress={handleOnPress} />
    </View>
  );
};

export default HomePage;
