import {renderHook} from '@testing-library/react-native';
import {AllTheProviders, waitFor} from 'test-utils';

import {authService} from '../../authService';
import {useAuthSignIn} from '../useAuthSignIn';

import {mockedAuthCredentials} from './mockedData/mocks';

describe('useAuthSignIn', () => {
  it('save credentials if the sign-in successfully', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentials);
    const {result} = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders,
    });
    result.current.signIn({email: 'test@test', password: '1234'});
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
  it('calls the onError with a message if sign-in fails', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {result} = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders,
    });
  });
});
