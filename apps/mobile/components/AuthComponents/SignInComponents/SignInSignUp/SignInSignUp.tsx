import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AuthLinkButton } from '../../AuthSharedComponents/AuthLink';

const SignInSignUpContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const SignInSignUp: React.FC = () => {
  return (
    <SignInSignUpContainer>
      <Text>Don't have an account? </Text>
      <AuthLinkButton
        title='Sign Up'
        onPress={() => {
          // Handle sign up action
        }}
      />
    </SignInSignUpContainer>
  );
};
