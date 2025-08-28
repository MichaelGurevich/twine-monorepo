import { Text } from '@react-navigation/elements';
import { useAuth } from 'authentication';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { ButtonDummy } from '../../components/Button';
import { InputDummy } from '../../components/InputDummy';

const SignUpEmailPage = () => {
  const { signUp } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword || !password || !confirmPassword) {
      alert('No');
      return;
    }
    const response = await signUp({ email, password });
    if (response.success) {
      router.push('/ConfirmEmailPage');
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
      <Text>SignUpEmailPage</Text>
      <InputDummy placeholder='Email' onChangeText={setEmail} value={email} />
      <InputDummy
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
      />

      <InputDummy
        placeholder='Confirm Password'
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <ButtonDummy text={'Sign Up'} onPress={handleSignUp} />
      <ButtonDummy text={'Back to Sign In'} onPress={() => router.back()} />
    </View>
  );
};

export default SignUpEmailPage;
