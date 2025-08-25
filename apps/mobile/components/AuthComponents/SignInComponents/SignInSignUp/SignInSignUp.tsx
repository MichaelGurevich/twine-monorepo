import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';
import { AuthLinkButton } from '../../AuthSharedComponents/AuthLink';

const SignInSignUpContainer = styled(View)`
  position: absolute;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: ${({ theme }: { theme: AuthThemeContextType }) =>
    theme.absolute.redirectLink.top};
  align-self: ${({ theme }: { theme: AuthThemeContextType }) =>
    theme.absolute.redirectLink.alignSelf};
`;

export const SignInSignUp = () => {
  const router = useRouter();

  return (
    <SignInSignUpContainer>
      <Text>Don't have an account? </Text>
      <AuthLinkButton
        title='Sign Up'
        onPress={() => {
          router.push('/SignUpEmailPage');
        }}
      />
    </SignInSignUpContainer>
  );
};
