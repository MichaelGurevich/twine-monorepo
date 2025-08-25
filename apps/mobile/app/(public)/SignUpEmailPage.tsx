import {
  AuthContainer,
  AuthTitle,
} from '../../components/AuthComponents/AuthSharedComponents';
import {
  SignUpBack,
  SignUpFormButton,
  SignUpInput,
} from '../../components/AuthComponents/SignUpComponents';

const SignUpEmailPage = () => {
  return (
    <AuthContainer>
      <AuthTitle />
      <SignUpFormButton />
      <SignUpInput secureTextEntry={false} />

      <SignUpBack backDestination='LoginPage' />
    </AuthContainer>
  );
};

export default SignUpEmailPage;
