import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User} from '@domain';
import {useSearchHistory} from '@services';

import {Box, ProfileUser, Text} from '@components';

export function SearchHistory() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userList = useSearchHistory();

  function renderItem({item}: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} />;
  }

  return (
    <Box>
      <FlatList
        ListHeaderComponent={
          <Text preset="headingMedium">Búsquedas recientes</Text>
        }
        data={[]}
        renderItem={renderItem}
      />
    </Box>
  );
}
