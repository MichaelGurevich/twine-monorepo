import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

export interface AuthContainerProps extends ViewProps {
  children: ReactNode;
}

const StyledLinearGradient = styled(LinearGradient).attrs({
  colors: ['#81DACA', '#40E0D0', '#00CEC8', '#00B9B3', '#548C87'],
  locations: [0, 0.25, 0.5, 0.75, 1],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

export const AuthContainer = ({ children, ...props }: AuthContainerProps) => {
  return <StyledLinearGradient {...props}>{children}</StyledLinearGradient>;
};
