import {renderHook} from '@testing-library/react-native';
import {AllTheProviders} from 'test-utils';

import {useAuthSignIn} from '../useAuthSignIn';

describe('useAuthSignIn', () => {
  it('save credentials if the sign-in successfully', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {result} = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders,
    });
  });
  it('calls the onError with a message if sign-in fails', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {result} = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders,
    });
  });
});
