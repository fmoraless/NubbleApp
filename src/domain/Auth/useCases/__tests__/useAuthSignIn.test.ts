import {renderHook, waitFor} from 'test-utils';

import {authService} from '../../authService';
import {useAuthSignIn} from '../useAuthSignIn';

const mockedSaveCredentials = jest.fn();

import {mockedAuthCredentials} from './mockedData/mocks';

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    useAuthCredentials: () => ({
      saveCredentials: mockedSaveCredentials,
    }),
  };
});

describe('useAuthSignIn', () => {
  it('save credentials if the sign-in successfully', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentials);

    const mockedOnSuccess = jest.fn();
    const {result} = renderHook(() =>
      useAuthSignIn({onSuccess: mockedOnSuccess}),
    );

    result.current.signIn({email: 'test@test', password: '1234'});

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockedSaveCredentials).toHaveBeenCalledWith(mockedAuthCredentials);
    expect(mockedOnSuccess).toHaveBeenCalledWith(mockedAuthCredentials);
  });
  it('calls the onError with a message if sign-in fails', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockRejectedValue(new Error('invalid user'));

    const mockedOnError = jest.fn();
    const {result} = renderHook(() => useAuthSignIn({onError: mockedOnError}));

    result.current.signIn({email: 'test@test', password: '1234'});

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockedOnError).toHaveBeenCalledWith('invalid user');
  });
});
