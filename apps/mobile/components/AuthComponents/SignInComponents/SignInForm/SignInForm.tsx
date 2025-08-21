import { View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';
import { SignInButtonGroup } from './SignInButtonGroup';
import { SignInCredentials } from './SignInCredentials';

const SignInFormContainer = styled(View)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.pages.signIn.formMarginTop};
`;

export const SignInForm: React.FC = () => {
  return (
    <SignInFormContainer>
      <SignInCredentials />
      <SignInButtonGroup />
    </SignInFormContainer>
  );
};
