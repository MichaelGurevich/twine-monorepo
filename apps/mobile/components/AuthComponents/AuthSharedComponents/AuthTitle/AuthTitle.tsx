import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';

const TitleContainer = styled(View)`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.absolute.login.title.top};
  align-self: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.absolute.login.title.alignSelf};
`;

const TitleText = styled(Text)`
  color: #40e0d0;
  font-size: 82px;
  font-weight: 500;
  text-align: center;
`;

export const AuthTitle: React.FC = () => {
  return (
    <TitleContainer>
      <TitleText>twine</TitleText>
    </TitleContainer>
  );
};
