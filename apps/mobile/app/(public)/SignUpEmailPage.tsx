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
      <SignUpBack />
    </AuthContainer>
  );
};

export default SignUpEmailPage;
