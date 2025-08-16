import {
  CognitoIdentityProvider,
  ConfirmSignUpCommand,
  ConfirmSignUpCommandInput,
  SignUpCommand,
  SignUpCommandInput,
} from '@aws-sdk/client-cognito-identity-provider';
import { cognitoConfig } from '../config';
import {
  ConfirmSignUpCommandParams,
  ConfirmSignUpCommandResponse,
  SignUpCommandParams,
  SignUpCommandResponse,
} from '../types';

const { region: REGION, clientId: CLIENT_ID } = cognitoConfig;

class AuthService {
  client: CognitoIdentityProvider;
  clientId: string;

  constructor(region: string, clientId: string) {
    this.client = new CognitoIdentityProvider({ region });
    this.clientId = clientId;
  }

  async signUp({
    email,
    password,
  }: SignUpCommandParams): Promise<SignUpCommandResponse> {
    const signUpCommandInput: SignUpCommandInput = {
      ClientId: this.clientId,
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
      ],
    };

    try {
      const command = new SignUpCommand(signUpCommandInput);
      const response = await this.client.send(command);
      const { Session } = response;
      return {
        success: true,
        session: Session,
        error: null,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.name : 'Unknown error',
      };
    }
  }

  async confirmSignUp({
    email,
    confirmationCode,
  }: ConfirmSignUpCommandParams): Promise<ConfirmSignUpCommandResponse> {
    const confirmSignUpCommandInput: ConfirmSignUpCommandInput = {
      ClientId: this.clientId,
      Username: email,
      ConfirmationCode: confirmationCode,
    };

    try {
      const command = new ConfirmSignUpCommand(confirmSignUpCommandInput);
      const response = await this.client.send(command);
      const { Session } = response;

      return {
        success: true,
        session: Session,
        error: null,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.name : 'Unknown error',
      };
    }
  }
}
export const authService = new AuthService(REGION, CLIENT_ID);
