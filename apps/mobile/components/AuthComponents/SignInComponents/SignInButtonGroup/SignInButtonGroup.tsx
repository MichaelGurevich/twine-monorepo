import { View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';
import { AuthPrimaryButton } from '../../AuthSharedComponents/AuthButtons/AuthPrimaryButton';
import { AuthLinkButton } from '../../AuthSharedComponents/AuthLink';

const SignInButtonGroupContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
  top: ${({ theme }: { theme: AuthThemeContextType }) =>
    theme.absolute.login.signInButton.top};
  align-self: ${({ theme }: { theme: AuthThemeContextType }) =>
    theme.absolute.login.signInButton.alignSelf};
`;

export const SignInButtonGroup: React.FC = () => {
  return (
    <SignInButtonGroupContainer>
      <AuthPrimaryButton title='Sign In' onPress={() => {}} disabled={false} />
      <AuthLinkButton title='Forgot password?' onPress={() => {}} />
    </SignInButtonGroupContainer>
  );
};
