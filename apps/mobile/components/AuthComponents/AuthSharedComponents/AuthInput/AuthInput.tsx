import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';

export interface AuthTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: string;
  containerStyle?: ViewStyle;
}

const InputContainer = styled(View)`
  position: relative;
  width: 90%;
`;

const StyledTextInput = styled(TextInput)`
  background-color: #f7f7f7;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  padding: 16px;
  padding-right: ${({ secureTextEntry }: { secureTextEntry?: boolean }) =>
    secureTextEntry ? '60px' : '16px'};
  font-size: 16px;
  color: #262626;
  min-height: 52px;
`;

const ToggleButton = styled(TouchableOpacity)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-10px);
`;

const ToggleText = styled(Text)`
  color: #262626;
  font-size: 14px;
  font-weight: 600;
`;

export const AuthTextInput: React.FC<AuthTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  autoComplete,
  containerStyle,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isSecureEntry = secureTextEntry && !isPasswordVisible;

  return (
    <InputContainer style={containerStyle}>
      <StyledTextInput
        placeholder={placeholder}
        placeholderTextColor='#8E8E8E'
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecureEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={false}
      />
      {secureTextEntry && (
        <ToggleButton onPress={togglePasswordVisibility}>
          <ToggleText>{isPasswordVisible ? 'Hide' : 'Show'}</ToggleText>
        </ToggleButton>
      )}
    </InputContainer>
  );
};
