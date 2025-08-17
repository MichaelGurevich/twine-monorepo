import {
  CognitoIdentityProvider,
  ConfirmSignUpCommand,
  ConfirmSignUpCommandInput,
  ResendConfirmationCodeCommand,
  ResendConfirmationCodeCommandInput,
  SignUpCommand,
  SignUpCommandInput,
} from '@aws-sdk/client-cognito-identity-provider';
import { cognitoConfig } from '../config';
import {
  CONFIRM_SIGNUP_ERROR_MSG,
  ConfirmSignUpCommandParams,
  ConfirmSignUpCommandResponse,
  ResendConfirmationCodeCommandParams,
  ResendConfirmationCodeCommandResponse,
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
      const errorMessage =
        error instanceof Error && CONFIRM_SIGNUP_ERROR_MSG.includes(error.name)
          ? error.name
          : 'Unknown error';
      return {
        success: false,
        error: errorMessage,
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

  async resendConfirmationCode({
    email,
  }: ResendConfirmationCodeCommandParams): Promise<ResendConfirmationCodeCommandResponse> {
    const resendConfirmationCodeCommandInput: ResendConfirmationCodeCommandInput =
      {
        ClientId: this.clientId,
        Username: email,
      };

    try {
      const command = new ResendConfirmationCodeCommand(
        resendConfirmationCodeCommandInput
      );
      await this.client.send(command);
      return {
        success: true,
        error: null,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error && CONFIRM_SIGNUP_ERROR_MSG.includes(error.name)
          ? error.name
          : 'Unknown error';
      return {
        success: false,
        error: errorMessage,
      };
    }
  }
}
export const authService = new AuthService(REGION, CLIENT_ID);
