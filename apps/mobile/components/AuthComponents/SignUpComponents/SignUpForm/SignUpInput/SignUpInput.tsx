import { View } from 'react-native';
import styled from 'styled-components';
import {
  AuthTextInput,
  AuthTextInputProps,
} from '../../../AuthSharedComponents/AuthInput';

interface SignUpInputProps
  extends Pick<AuthTextInputProps, 'secureTextEntry'> {}

const SignUpCredentialsInputContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SignUpInput: React.FC<SignUpInputProps> = ({
  secureTextEntry,
}: SignUpInputProps) => {
  return (
    <SignUpCredentialsInputContainer>
      <AuthTextInput
        placeholder='Phone number, username, or email'
        value={''}
        onChangeText={() => {}}
        keyboardType='email-address'
        autoComplete='email'
        secureTextEntry={secureTextEntry}
      />
    </SignUpCredentialsInputContainer>
  );
};
