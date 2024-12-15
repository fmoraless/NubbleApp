import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';
import {renderHook} from 'test-utils';

import {theme} from '@theme';

import {useAppSafeArea} from '../useAppSafeArea';

jest.mock('react-native-safe-area-context');

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  test('when the safe area is less than minimun requirement, it returns the minimun requirement', () => {
    mockedUseSafeAreaInsets.mockImplementation(
      () => ({top: 4, bottom: 5} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });

  test('when the safe area is greater than minimun requirement, it returns the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementation(
      () => ({top: 40, bottom: 40} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(40);
    expect(result.current.bottom).toEqual(40);
  });
});
