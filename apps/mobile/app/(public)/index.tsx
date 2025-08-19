import { useAuth } from 'authentication';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [challenge, setChallenge] = useState<string | undefined>(undefined);
  const [token, setToken] = useState<string | null>();

  const router = useRouter();
  const authState = useAuth();

  const handleSignup = () => {
    authState.signUp({ email, password });
  };

  const handleConfirmCode = () => {
    const confirmationCode: string = confirmCode;
    authState.confirmSignUp({ email, confirmationCode });
  };

  const handleResendConfirmCode = () => {
    authState.resendConfirmationCode({ email });
  };

  const handleAuthInitiate = async () => {
    const response = await authState.initiateAuth({
      email,
      password,
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
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder='Confirm Code'
        value={confirmCode}
        onChangeText={setConfirmCode}
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleConfirmCode}>
        <Text style={styles.buttonText}>Confirm Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleResendConfirmCode}>
        <Text style={styles.buttonText}>Resend confirm Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAuthInitiate}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/SignUpEmailPage')}
      >
        <Text style={styles.buttonText}>Go to Sign Up</Text>
      </TouchableOpacity>

      <Text>
        {authState.tokensData
          ? authState.tokensData.accessToken
          : 'No tokens available'}
      </Text>

      <Text>{error ?? 'No error'}</Text>
      <Text>{challenge ?? 'No challenge'}</Text>
      <Text>{token ?? 'no token'}</Text>
    </View>
  );
};

export default SimpleForm;
