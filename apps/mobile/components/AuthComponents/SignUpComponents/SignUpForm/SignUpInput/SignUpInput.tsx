import { View } from 'react-native';
import styled from 'styled-components';
import {
  AuthTextInput,
  AuthTextInputProps,
} from '../../../AuthSharedComponents/AuthInput';

import { useAuthCredentials } from '../../../../../contexts/authCredentials/useAuthCredentials';

export interface SignUpInputProps
  extends Pick<AuthTextInputProps, 'secureTextEntry'> {}

const SignUpCredentialsInputContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

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
