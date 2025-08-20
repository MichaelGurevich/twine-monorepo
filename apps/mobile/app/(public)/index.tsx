import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { AuthPrimaryButton } from '../../components/AuthComponents/AuthSharedComponents/AuthButtons/AuthPrimaryButton/AuthPrimaryButton';
import { AuthContainer } from '../../components/AuthComponents/AuthSharedComponents/AuthContainer';
import { AuthTextInput } from '../../components/AuthComponents/AuthSharedComponents/AuthInput/';
import { AuthLinkButton } from '../../components/AuthComponents/AuthSharedComponents/AuthLink/';
import { AuthTitle } from '../../components/AuthComponents/AuthSharedComponents/AuthTitle/';

const SignUpPromptContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SignInFromContainer = styled.View`
  width: 100%;
  height: 50%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const SignInCredentialsContainer = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthContainer>
      <AuthTitle />
      <SignInFromContainer>
        <SignInCredentialsContainer>
          <AuthTextInput
            placeholder='Phone number, username, or email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoComplete='email'
          />
          <AuthTextInput
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoComplete='current-password'
          />
        </SignInCredentialsContainer>

        <AuthPrimaryButton title='Sign In' onPress={() => {}} />
        <AuthLinkButton
          title='Forgot password?'
          onPress={() => {
            // Handle forgot password action
          }}
        />
      </SignInFromContainer>

      <SignUpPromptContainer>
        <Text>Don't have an account? </Text>
        <AuthLinkButton
          title='Sign Up'
          onPress={() => {
            // Handle sign up action
          }}
        />
      </SignUpPromptContainer>
    </AuthContainer>
  );
};

export default SignUpPage;
