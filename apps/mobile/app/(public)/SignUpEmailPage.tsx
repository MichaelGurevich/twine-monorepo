import {
  AuthContainer,
  AuthTitle,
} from '../../components/AuthComponents/AuthSharedComponents';
import {
  SignUpBack,
  SignUpForm,
} from '../../components/AuthComponents/SignUpComponents';

const SignUpEmailPage = () => {
  return (
    <AuthContainer>
      <AuthTitle />
      <SignUpForm />
      <SignUpBack backDestination='LoginPage' />
    </AuthContainer>
  );
};

export default SignUpEmailPage;
