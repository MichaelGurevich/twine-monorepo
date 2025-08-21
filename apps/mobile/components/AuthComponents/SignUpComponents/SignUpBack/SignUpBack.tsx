import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AuthLinkButton } from '../../AuthSharedComponents/AuthLink';

const SignUpBackContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 87px;
`;

export interface SignUpBackProps {
  backDestination: 'LoginPage' | 'SignUpEmailPage';
}

export const SignUpBack = ({ backDestination }: SignUpBackProps) => {
  const router = useRouter();

  const BACK_ROUTE = backDestination === 'LoginPage' ? '/' : '/SignUpEmailPage';
  const TITLE = backDestination === 'LoginPage' ? 'Log in' : '< Back';

  return (
    <SignUpBackContainer>
      {backDestination === 'LoginPage' && <Text>Have and account? </Text>}
      <AuthLinkButton
        title={TITLE}
        onPress={() => {
          router.push(BACK_ROUTE);
        }}
      />
    </SignUpBackContainer>
  );
};
