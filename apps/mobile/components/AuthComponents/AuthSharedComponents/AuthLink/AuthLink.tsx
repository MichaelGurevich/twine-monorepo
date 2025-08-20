import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export interface AuthLinkButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const StyledTouchableOpacity = styled(TouchableOpacity)<{ disabled?: boolean }>`
  padding: 8px;
  align-items: center;
  justify-content: center;

  ${({ disabled }: { disabled?: boolean }) => disabled && `opacity: 0.5;`}
`;

const LinkText = styled(Text)<{ disabled?: boolean }>`
  color: ${({ disabled }: { disabled?: boolean }) =>
    disabled ? '#A0AEC0' : '#40e0d0'};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

export const AuthLinkButton: React.FC<AuthLinkButtonProps> = ({
  title,
  onPress,
  disabled = false,
}: AuthLinkButtonProps) => {
  const handlePress = () => {
    if (!disabled) {
      onPress();
    }
  };

  return (
    <StyledTouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      activeOpacity={0.7}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <LinkText disabled={disabled}>{title}</LinkText>
    </StyledTouchableOpacity>
  );
};
