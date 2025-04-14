import React from 'react';

import {InfinitiScrollList, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FavoriteScreen = (props: AppTabScreenProps<'FavoriteScreen'>) => {
  return (
    <Screen>
      <Text preset="headingLarge">FavoriteScreen Screen</Text>
      <InfinitiScrollList
        emptyListProps={{
          emptyMessage: 'No hay Favoritos',
          errorMessage: 'Error al cargar los Favoritos',
        }}
      />
    </Screen>
  );
};
