import {User, UserAPI} from '../User';

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface AuthCredentials {
  token: string;
  tokenExpiresAt: string;
  refreshToken: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; // 'Bearer'
    token: string; // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIn0sImlhdCI6MTYyNjEwNjQwN30.
    refreshToken: string; // 3399f9c0bf650430402be94ebb61d20f34cc066f2b25631512564bfa2a6378ea
    expires_at: string; // '2021-07-19T20:00:40.000Z'
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username?: string;
  email?: string;
  password: string;
}

export interface ForgotPasswordParam {
  email: string;
}
