import { Text } from '@react-navigation/elements';
import { useAuth } from '../../context/Auth';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { ButtonDummy } from '../../components/Button';
import { InputDummy } from '../../components/InputDummy';
import { useAuthCredentials } from '../../context/AuthCredentialsContext/useAuthCredentials';

const SignUpEmailPage = () => {
  const { confirmSignUp, initiateAuth } = useAuth();
  const { signUpEmail, signUpPassword } = useAuthCredentials();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [code, setCode] = useState<string>('');

  const handleConfirmSignUp = async () => {
    if (!code) {
      alert('No');
      return;
    }
    setIsLoading(true);
    const confirmSignUpResponse = await confirmSignUp({
      email: signUpEmail,
      confirmationCode: code,
    });

    if (confirmSignUpResponse.success) {
      await initiateAuth({
        email: signUpEmail,
        password: signUpPassword,
      });
    }
    setIsLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text>ConfirmSignUp</Text>
      <InputDummy
        placeholder='Confirmation code'
        onChangeText={setCode}
        value={code}
      />
      <ButtonDummy text={'Sign Up'} onPress={handleConfirmSignUp} />
      <ButtonDummy text={'Back to Sign Up'} onPress={() => router.back()} />
      <Text>{isLoading ? 'Loading...' : 'not loading'}</Text>
    </View>
  );
};

export default SignUpEmailPage;
