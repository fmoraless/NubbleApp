import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

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
