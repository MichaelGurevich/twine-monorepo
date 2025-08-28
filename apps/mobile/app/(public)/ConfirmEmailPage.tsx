import { Text } from '@react-navigation/elements';
import { useAuth } from 'authentication';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { ButtonDummy } from '../../components/Button';
import { InputDummy } from '../../components/InputDummy';

const SignUpEmailPage = () => {
  const { confirmSignUp } = useAuth();
  const router = useRouter();

  const [code, setCode] = useState<string>('');

  const handleConfirmSignUp = async () => {
    if (!code) {
      alert('No');
      return;
    }
    await confirmSignUp({ code });
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
    </View>
  );
};

export default SignUpEmailPage;
