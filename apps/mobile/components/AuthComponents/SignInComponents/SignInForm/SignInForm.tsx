import { View } from 'react-native';
import styled from 'styled-components';
import { SignInButtonGroup } from './SignInButtonGroup';
import { SignInCredentials } from './SignInCredentials';

const SignInFormContainer = styled(View)`
  width: 100%;
  flex-direction: column;
  margin-top: 100px;
`;

export const SignInForm: React.FC = () => {
  return (
    <SignInFormContainer>
      <SignInCredentials />
      <SignInButtonGroup />
    </SignInFormContainer>
  );
};
