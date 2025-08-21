import { View } from 'react-native';
import styled from 'styled-components';
import { AuthTextInput } from '../../../AuthSharedComponents/AuthInput';

const SignInCredentialsContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SignInCredentials: React.FC = () => {
  return (
    <SignInCredentialsContainer>
      <AuthTextInput
        placeholder='Phone number, username, or email'
        value={''}
        onChangeText={() => {}}
        keyboardType='email-address'
        autoComplete='email'
      />
      <AuthTextInput
        placeholder='Password'
        value={''}
        onChangeText={() => {}}
        secureTextEntry={true}
        autoComplete='current-password'
      />
    </SignInCredentialsContainer>
  );
};
