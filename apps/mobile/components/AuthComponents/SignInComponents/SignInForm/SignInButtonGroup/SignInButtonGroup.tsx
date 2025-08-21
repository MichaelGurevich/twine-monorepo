import { View } from 'react-native';
import styled from 'styled-components/native';
import { AuthPrimaryButton } from '../../../AuthSharedComponents/AuthButtons/AuthPrimaryButton';
import { AuthLinkButton } from '../../../AuthSharedComponents/AuthLink';

const SignInButtonGroupContainer = styled(View)`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const SignInButtonGroup: React.FC = () => {
  return (
    <SignInButtonGroupContainer>
      <AuthPrimaryButton title='Sign In' onPress={() => {}} disabled={false} />
      <AuthLinkButton title='Forgot password?' onPress={() => {}} />
    </SignInButtonGroupContainer>
  );
};
