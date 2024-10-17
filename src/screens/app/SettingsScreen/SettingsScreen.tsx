import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const SettingsScreen = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: AppScreenProps<'SettingsScreen'>,
) => {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Settings Screen</Text>
      <Button title="Home" onPress={() => {}} />
    </Screen>
  );
};
