import { Text } from '@react-navigation/elements';
import { useAuth } from '../../context/Auth';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { ButtonDummy } from '../../components/Button';
import { InputDummy } from '../../components/InputDummy';
import { useAuthCredentials } from '../../context/AuthCredentialsContext/useAuthCredentials';

const SignUpPage = () => {
  const { signUp } = useAuth();
  const router = useRouter();

  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signUpEmail, signUpPassword, setSignUpEmail, setSignUpPassword } =
    useAuthCredentials();

  const handleSignUp = async () => {
    if (
      signUpPassword !== confirmPassword ||
      !signUpPassword ||
      !confirmPassword
    ) {
      alert('No');
      return;
    }

    setIsLoading(true);

    const response = await signUp({
      email: signUpEmail,
      password: signUpPassword,
    });

    setIsLoading(false);
    if (response.success) {
      router.push('./ConfirmEmailPage');
    }
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
      <Text>SignUpPage</Text>
      <InputDummy
        placeholder='Email'
        onChangeText={setSignUpEmail}
        value={signUpEmail}
      />
      <InputDummy
        placeholder='Password'
        onChangeText={setSignUpPassword}
        value={signUpPassword}
      />

      <InputDummy
        placeholder='Confirm Password'
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <ButtonDummy text={'Sign Up'} onPress={handleSignUp} />
      <ButtonDummy text={'Back to Sign In'} onPress={() => router.back()} />
      <Text>{isLoading ? 'Loading...' : 'not loading'}</Text>
    </View>
  );
};

export default SignUpPage;
