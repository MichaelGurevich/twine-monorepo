import React from 'react';
import styled from 'styled-components/native';

// Basic styled TextInput
const StyledInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  background-color: white;
`;

// Input component
export const InputDummy = ({ placeholder, value, onChangeText, ...props }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};
