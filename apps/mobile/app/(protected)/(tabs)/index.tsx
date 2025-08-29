import { Button, Text, View } from 'react-native';
import { useAuth } from '../../../context/Auth';
import { loadAccessToken } from '../../../utils/secureStorage';

const HomePage = () => {
  const { signOut } = useAuth();

  const handleOnPress = async () => {
    const securedAccessToken = await loadAccessToken();
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
