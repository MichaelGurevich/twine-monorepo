import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export interface AuthPrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const ButtonContainer = styled(View)`
  width: 90%;
`;

const StyledLinearGradient = styled(LinearGradient)<{ disabled?: boolean }>`
  padding: 16px 32px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  min-height: 52px;

  ${({ disabled }: { disabled?: boolean }) => disabled && `opacity: 0.5;`}
`;

const ButtonText = styled(Text)<{ disabled?: boolean }>`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.2px;
  ${({ disabled }: { disabled?: boolean }) => disabled && `opacity: 0.7;`}
`;

export const AuthPrimaryButton: React.FC<AuthPrimaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
}: AuthPrimaryButtonProps) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    if (!disabled) {
      Animated.spring(scaleValue, {
        toValue: 0.98,
        useNativeDriver: true,
        speed: 50,
        bounciness: 4,
      }).start();
    }
  };

  const handlePressOut = () => {
    if (!disabled) {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        speed: 50,
        bounciness: 4,
      }).start();
    }
  };

  const handlePress = () => {
    if (!disabled) {
      onPress();
    }
  };

  // Gradient colors - turquoise-based gradient
  const gradientColors = disabled
    ? ['#A0AEC0', '#8B9DC3']
    : ['#40e0d0', '#20b2aa', '#48d1cc'];

  return (
    <ButtonContainer>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <TouchableOpacity
          disabled={disabled}
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={0.9}
        >
          <StyledLinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            disabled={disabled}
          >
            <ButtonText disabled={disabled}>{title}</ButtonText>
          </StyledLinearGradient>
        </TouchableOpacity>
      </Animated.View>
    </ButtonContainer>
  );
};
