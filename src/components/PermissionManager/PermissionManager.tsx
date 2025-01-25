import React from 'react';
import {Linking, Platform} from 'react-native';

import {PermissionName, usePermission} from '@services';

import {Text, Button, ActivityIndicator, Box} from '@components';

import {Screen} from '../Screen/Screen';

interface PermissionManagerProps {
  permissionName: PermissionName;
  description: string;
  children: React.ReactElement;
}

export function PermissionManager({
  permissionName,
  description,
  children,
}: PermissionManagerProps) {
  const {status, isLoading} = usePermission(permissionName);

  console.log('status', status);
  if (status === 'granted') {
    return children;
  }

  return (
    <Screen flex={1} justifyContent="center" alignItems="center">
      <Text preset="headingSmall" textAlign="center">
        {description}
      </Text>
      {isLoading && <ActivityIndicator color="primary" />}

      {status === 'never_ask_again' && (
        <Box>
          {Platform.OS === 'android' && (
            <Text
              preset="paragraphMedium"
              color="error"
              marginVertical="s16"
              textAlign="center">
              Es necesario acceder al permiso y cerrar para poder alterar lñas
              modificaciones.
            </Text>
          )}
          <Button
            title="Abrir Configuraciones"
            onPress={Linking.openSettings}
            mt="s16"
          />
        </Box>
      )}
    </Screen>
  );
}
