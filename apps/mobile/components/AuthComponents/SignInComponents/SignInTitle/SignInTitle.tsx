import { View } from 'react-native';
import styled from 'styled-components';
import { AuthTitle } from '../../AuthSharedComponents/AuthTitle';

const SignInTitleContainer = styled(View)`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  height: 20%;
`;

export const SignInTitle: React.FC = () => {
  return (
    <SignInTitleContainer>
      <AuthTitle />
    </SignInTitleContainer>
  );
};
