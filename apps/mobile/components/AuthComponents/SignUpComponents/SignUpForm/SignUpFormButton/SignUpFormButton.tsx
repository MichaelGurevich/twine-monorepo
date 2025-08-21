import { useRouter } from 'expo-router';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../../contexts/auth';
import { AuthPrimaryButton } from '../../../AuthSharedComponents/AuthButtons/AuthPrimaryButton';

const SignUpButtonContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.spacing.buttonGroupMarginTop};
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
