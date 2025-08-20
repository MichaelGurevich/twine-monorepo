import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const TitleText = styled(Text)`
  color: #40e0d0;
  font-size: 82px;
  font-weight: 500;
  text-align: center;
`;

export const AuthTitle: React.FC = () => {
  return <TitleText>twine</TitleText>;
};
