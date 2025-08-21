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

export const SignUpBack: React.FC = () => {
  const router = useRouter();
  return (
    <SignUpBackContainer>
      <Text>Have and account? </Text>
      <AuthLinkButton
        title='Log in'
        onPress={() => {
          router.push('/');
        }}
      />
    </SignUpBackContainer>
  );
};
