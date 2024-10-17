import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const MyProfileScreen = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: AppTabScreenProps<'MyProfileScreen'>,
) => {
  return (
    <Screen>
      <Text preset="headingLarge">MyProfileScreen Screen</Text>
    </Screen>
  );
};
