import {AuthCredentials} from 'src/domain/Auth/authTypes';

export const mockedAuthCredentials: AuthCredentials = {
  token: 'access_token',
  tokenExpiresAt: '2022-01-01T00:00:00.000Z',
  refreshToken: 'refresh_token',
  user: {
    id: 1,
    firstName: 'Maria',
    lastName: 'Julia',
    username: 'mariajulia',
    email: 'mariajulia@coffstack.com',
    profileUrl: 'fake-url',
    isOnline: true,
    fullName: 'Maria Julia',
  },
};
