import {
  AuthContainer,
  AuthTitle,
} from '../../components/AuthComponents/AuthSharedComponents';
import {
  SignUpBack,
  SignUpForm,
} from '../../components/AuthComponents/SignUpComponents';

const SignUpPasswordPage = () => {
  return (
    <AuthContainer>
      <AuthTitle />
      <SignUpForm secureTextEntry={true} />
      <SignUpBack backDestination='SignUpEmailPage' />
    </AuthContainer>
  );
};

export default SignUpPasswordPage;
