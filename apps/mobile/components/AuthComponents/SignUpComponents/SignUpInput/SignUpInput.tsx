import { View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';
import { useAuthCredentials } from '../../../../contexts/authCredentials/useAuthCredentials';
import {
  AuthTextInput,
  AuthTextInputProps,
} from '../../AuthSharedComponents/AuthInput';

const SignUpCredentialsInputContainer = styled(View)`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: ${({ theme }: { theme: AuthThemeContextType }) =>
    theme.absolute.inputFields.top};
  align-self: ${({ theme }: { theme: AuthThemeContextType }) =>
    theme.absolute.inputFields.alignSelf};
`;

export interface SignUpInputProps
  extends Pick<AuthTextInputProps, 'secureTextEntry'> {}

export const SignUpInput = ({ secureTextEntry }: SignUpInputProps) => {
  const { signUpEmail, setSignUpEmailHandler } = useAuthCredentials();
  const PLACE_HOLDER_TEXT = secureTextEntry ? 'Password' : 'Email';

  return (
    <SignUpCredentialsInputContainer>
      <AuthTextInput
        placeholder={PLACE_HOLDER_TEXT}
        value={signUpEmail || ''}
        onChangeText={setSignUpEmailHandler}
        keyboardType='email-address'
        autoComplete='email'
        secureTextEntry={secureTextEntry}
      />
    </SignUpCredentialsInputContainer>
  );
};
