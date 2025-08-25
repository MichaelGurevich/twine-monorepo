import { useRouter } from 'expo-router';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';
import { AuthPrimaryButton } from '../../AuthSharedComponents';

const SignUpButtonContainer = styled(View)`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: ${({ theme }: { theme: AuthThemeContextType }) =>
    theme.absolute.primaryButton.top};
  align-self: ${({ theme }: { theme: AuthThemeContextType }) =>
    theme.absolute.primaryButton.alignSelf};
`;

export const SignUpFormButton = () => {
  const router = useRouter();
  return (
    <SignUpButtonContainer>
      <AuthPrimaryButton
        title='Proceed'
        onPress={() => {
          router.push('/SignUpPasswordPage');
        }}
        disabled={false}
      />
    </SignUpButtonContainer>
  );
};
