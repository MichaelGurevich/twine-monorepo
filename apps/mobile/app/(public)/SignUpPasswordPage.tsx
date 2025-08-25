import {
  AuthContainer,
  AuthTitle,
} from '../../components/AuthComponents/AuthSharedComponents';
import {
  SignUpBack,
  SignUpFormButton,
  SignUpInput,
} from '../../components/AuthComponents/SignUpComponents';

const SignUpPasswordPage = () => {
  return (
    <AuthContainer>
      <AuthTitle />
      <SignUpFormButton />
      <SignUpInput secureTextEntry={true} />

      <SignUpBack backDestination='SignUpEmailPage' />
    </AuthContainer>
  );
};

export default SignUpPasswordPage;
