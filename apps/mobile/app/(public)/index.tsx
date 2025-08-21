import React from 'react';
import { AuthContainer } from '../../components/AuthComponents/AuthSharedComponents';
import {
  SignInForm,
  SignInSignUp,
  SignInTitle,
} from '../../components/AuthComponents/SignInComponents';

const SignUpPage = () => {
  return (
    <AuthContainer>
      <SignInTitle />
      <SignInForm />
      <SignInSignUp />
    </AuthContainer>
  );
};

export default SignUpPage;
