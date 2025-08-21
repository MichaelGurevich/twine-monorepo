import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { AuthThemeContextType } from '../../../../contexts/auth';

export interface AuthTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: string;
}

const InputContainer = styled(View)`
  position: relative;
  width: 90%;
  height: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.dimensions.inputMinHeight};
  margin-top: ${(props: { theme: AuthThemeContextType }) =>
    props.theme.spacing.inputFieldMarginTop};
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
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isSecureEntry = secureTextEntry && !isPasswordVisible;

  return (
    <InputContainer>
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
