import { View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';
import { SignUpFormButton } from './SignUpFormButton';
import { SignUpInput, SignUpInputProps } from './SignUpInput';

const SignUpFormContainer = styled(View)`
  width: 100%;
  flex-direction: column;
  margin-top: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.pages.signUp.formMarginTop};
`;

export const SignUpForm = ({ secureTextEntry }: SignUpInputProps) => {
  return (
    <SignUpFormContainer>
      <SignUpInput secureTextEntry={secureTextEntry} />
      <SignUpFormButton />
    </SignUpFormContainer>
  );
};
