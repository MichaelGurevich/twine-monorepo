import React from 'react';
import {
  AuthContainer,
  AuthTitle,
} from '../../components/AuthComponents/AuthSharedComponents';

import {
  SignInButtonGroup,
  SignInCredentials,
  SignInSignUp,
} from '../../components/AuthComponents/SignInComponents';

const SignInPage = () => {
  return (
    <AuthContainer>
      <AuthTitle />
      <SignInCredentials />
      <SignInButtonGroup />
      <SignInSignUp />
    </AuthContainer>
  );
};

export default SignInPage;
