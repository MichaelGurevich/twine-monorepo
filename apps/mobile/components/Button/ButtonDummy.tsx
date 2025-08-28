import React from 'react';
import styled from 'styled-components/native';

// Styled TouchableOpacity component
const StyledButton = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  min-height: 44px;
`;

// Styled Text component
const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

// Button component
export const ButtonDummy = ({ onPress, text, disabled = false, ...props }) => {
  return (
    <StyledButton
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      {...props}
    >
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};
