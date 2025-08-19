import { Text } from '@react-navigation/elements';
import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

const ConfirmEmailPage = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text>ConfirmEmailPage</Text>

      <Button title='Back' onPress={() => router.back()} />
    </View>
  );
};

export default ConfirmEmailPage;
