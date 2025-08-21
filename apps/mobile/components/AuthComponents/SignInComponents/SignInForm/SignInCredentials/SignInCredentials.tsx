import { View } from 'react-native';
import styled from 'styled-components';
import { useAuthCredentials } from '../../../../../contexts/authCredentials/useAuthCredentials';
import { AuthTextInput } from '../../../AuthSharedComponents/AuthInput';
const SignInCredentialsContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SignInCredentials: React.FC = () => {
  const {
    signInEmail,
    setSignInEmailHandler,
    signInPassword,
    setSignInPasswordHandler,
  } = useAuthCredentials();

  const EMAIL_PLACEHOLDER = 'Email';
  const PASSWORD_PLACEHOLDER = 'Password';

  return (
    <SignInCredentialsContainer>
      <AuthTextInput
        placeholder={signInEmail || EMAIL_PLACEHOLDER}
        value={signInEmail || ''}
        onChangeText={setSignInEmailHandler}
        keyboardType='email-address'
        autoComplete='email'
      />
      <AuthTextInput
        placeholder={PASSWORD_PLACEHOLDER}
        value={signInPassword || ''}
        onChangeText={setSignInPasswordHandler}
        secureTextEntry={true}
        autoComplete='current-password'
      />
    </SignInCredentialsContainer>
  );
};
