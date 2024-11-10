import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const SettingsScreen = ({}: AppScreenProps<'SettingsScreen'>) => {
  const {isLoading, signOut} = useAuthSignOut();
  return (
    <Screen canGoBack title="Configuraciones">
      <Text preset="headingLarge">Settings Screen</Text>
      <Button
        loading={isLoading}
        title="Salir de la cuenta"
        onPress={signOut}
      />
    </Screen>
  );
};
