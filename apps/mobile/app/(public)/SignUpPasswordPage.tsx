import { Text } from '@react-navigation/elements';
import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

const SignUpPasswordPage = () => {
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
      <Text>SignUpPasswordPage</Text>
      <Button title='Back' onPress={() => router.back()} />
      <Button
        title='Confirm Email'
        onPress={() => router.push('/ConfirmEmailPage')}
      />
    </View>
  );
};

export default SignUpPasswordPage;
