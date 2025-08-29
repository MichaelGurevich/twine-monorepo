import { useAuth } from 'authentication';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ButtonDummy } from '../../components/Button';
import { InputDummy } from '../../components/InputDummy';
import { useAuthCredentials } from '../../context/AuthCredentialsContext/useAuthCredentials';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

const SimpleForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [challenge, setChallenge] = useState<string | undefined>(undefined);
  const [token, setToken] = useState<string | null>();

  const router = useRouter();
  const authState = useAuth();

  const { signInEmail, signInPassword, setSignInEmail, setSignInPassword } =
    useAuthCredentials();

  const handleAuthInitiate = async () => {
    const response = await authState.initiateAuth({
      email: signInEmail,
      password: signInPassword,
    });

    if (response.success) {
      if (response.challenge) {
        setChallenge(`Challenge: ${response.challenge}`);
      } else if (response.tokens) {
        setToken(response.tokens.accessToken);
      }
    } else {
      setError(`Error: ${response.error ?? 'Unknown error'}`);
    }
  };

  return (
    <View style={styles.container}>
      <InputDummy
        placeholder='Email'
        value={signInEmail}
        onChangeText={setSignInEmail}
      />
      <InputDummy
        placeholder='Password'
        value={signInPassword}
        onChangeText={setSignInPassword}
      />

      <ButtonDummy onPress={handleAuthInitiate} text='Sign in' />
      <ButtonDummy
        onPress={() => {
          router.push('./SignUpPage');
        }}
        text='Go to Sign Up'
      />

      <Text>
        {authState.isAuthenticated ? 'authenticated' : 'not authenticated'}
      </Text>
      <Text>
        {authState.tokensData
          ? authState.tokensData.accessToken
          : 'No tokens available'}
      </Text>
      <Text>{error ?? 'No error'}</Text>
      <Text>{challenge ?? 'No challenge'}</Text>
      <Text>{token ?? 'No challenge'}</Text>
    </View>
  );
};

export default SimpleForm;
