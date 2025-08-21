import React from 'react';
import {
  AuthContainer,
  AuthTitle,
} from '../../components/AuthComponents/AuthSharedComponents';
import {
  SignInForm,
  SignInSignUp,
} from '../../components/AuthComponents/SignInComponents';

const SignUpPage = () => {
  return (
    <AuthContainer>
      <AuthTitle />
      <SignInForm />
      <SignInSignUp />
    </AuthContainer>
  );
};

export default SignUpPage;
