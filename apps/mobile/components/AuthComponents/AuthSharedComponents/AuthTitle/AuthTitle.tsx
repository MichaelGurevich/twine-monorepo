import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';

const TitleContainer = styled(View)`
  justify-content: center;
  align-items: center;
  margin-top: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.spacing.titleMarginTop};
  width: 100%;
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
