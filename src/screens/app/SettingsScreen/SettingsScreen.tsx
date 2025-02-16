import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Separator} from '@components';
import {AppScreenProps} from '@routes';

import {MenuItem, MenuItemProps} from './components/MenuItem';

export const SettingsScreen = ({
  navigation,
}: AppScreenProps<'SettingsScreen'>) => {
  const {isLoading, signOut} = useAuthSignOut();

  const items: MenuItemProps[] = [
    {
      label: 'Terminos de uso',
      onPress: () => {},
    },
    {
      label: 'Política de privacidad',
      onPress: () => {},
    },
    {
      label: 'Modo oscuro',
      onPress: () => navigation.navigate('DarkModeScreen'),
    },
  ];

  function renderItem({item}: ListRenderItemInfo<MenuItemProps>) {
    return <MenuItem {...item} />;
  }
  return (
    <Screen canGoBack title="Configuraciones">
      <FlatList
        bounces={false}
        data={items}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={
          <Button
            mt="s48"
            loading={isLoading}
            title="Salir de la cuenta"
            onPress={signOut}
          />
        }
      />
    </Screen>
  );
};
