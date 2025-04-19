import React from 'react';
import {Image, ListRenderItemInfo} from 'react-native';

import {PostReaction, postReactionService} from '@domain';
import {QueryKeys} from '@infra';

import {InfinityScrollList, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FavoriteScreen = (props: AppTabScreenProps<'FavoriteScreen'>) => {
  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <Image
        source={{uri: item.post.imageURL}}
        style={{width: 300, height: 300}}
      />
    );
  }
  return (
    <Screen>
      <Text preset="headingSmall">Favorite Screen</Text>
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        flatListProps={{}}
        emptyListProps={{
          emptyMessage: 'No hay Favoritos',
          errorMessage: 'Error al cargar los Favoritos',
        }}
      />
    </Screen>
  );
};
