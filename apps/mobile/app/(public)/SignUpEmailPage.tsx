import { Text } from '@react-navigation/elements';
import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

const SignUpEmailPage = () => {
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
      <Text>SignUpEmailPage</Text>
      <Button title='Back' onPress={() => router.back()} />
      <Button
        title='Sign Up Password'
        onPress={() => router.push('/SignUpPasswordPage')}
      />
    </View>
  );
};

export default SignUpEmailPage;
