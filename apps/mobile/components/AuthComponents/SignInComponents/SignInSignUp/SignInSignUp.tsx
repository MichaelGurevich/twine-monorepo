import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';
import { AuthLinkButton } from '../../AuthSharedComponents/AuthLink';

const SignInSignUpContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.spacing.buttonSecondaryGroupMarginTop};
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
