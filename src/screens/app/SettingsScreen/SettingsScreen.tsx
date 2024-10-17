import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/routes/AppStack';

import {Button, Screen, Text} from '@components';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SettingsScreen = ({navigation}: ScreenProps) => {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Settings Screen</Text>
      <Button title="Home" onPress={() => {}} />
    </Screen>
  );
};
