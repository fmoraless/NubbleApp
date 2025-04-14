import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {usePaginatedList} from '@infra';
import {useScrollToTop} from '@react-navigation/native';

import {AppTabScreenProps} from '@routes';

import {Text} from '../Text/Text';

import {EmptyList, EmptyListProps} from './components/EmptyList';

type Props = {
  emptyListProps: Pick<EmptyListProps, 'emptyMessage' | 'errorMessage'>;
};

export const InfinitiScrollList = ({emptyListProps}: Props) => {
  const {list, isError, isLoading, refresh, fetchNextPage} = usePaginatedList();

  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <Text>Render Item</Text>;
  }
  return (
    <FlatList
      ref={flatListRef}
      showsVerticalScrollIndicator={false}
      data={list}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.1}
      refreshing={isLoading}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
      contentContainerStyle={{flex: list.length === 0 ? 1 : undefined}}
      ListEmptyComponent={
        <EmptyList
          refetch={refresh}
          error={isError}
          loading={isLoading}
          {...emptyListProps}
        />
      }
    />
  );
};
