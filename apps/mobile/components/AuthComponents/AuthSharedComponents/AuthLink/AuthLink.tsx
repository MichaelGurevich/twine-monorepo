import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';

export interface AuthLinkButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const StyledTouchableOpacity = styled(TouchableOpacity)<{ disabled?: boolean }>`
  padding: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.padding.authLinkPadding};
  align-items: center;
  justify-content: center;

  ${({ disabled }: { disabled?: boolean }) => disabled && `opacity: 0.5;`}
`;

const LinkText = styled(Text)<{ disabled?: boolean }>`
  color: ${({ disabled }: { disabled?: boolean }) =>
    disabled ? '#A0AEC0' : '#40e0d0'};
  text-align: center;
  font-size: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.textSize.authLinkTextSize};
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
