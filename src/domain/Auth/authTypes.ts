import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; // 'Bearer'
    token: string; // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIn0sImlhdCI6MTYyNjEwNjQwN30.
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
