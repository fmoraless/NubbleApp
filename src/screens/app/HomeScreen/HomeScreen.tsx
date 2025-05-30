import React from 'react';
import {ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {postService} from '@domain';
import {QueryKeys} from '@infra';

import {InfinityScrollList, PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {Post} from '../../../domain/Post/postTypes';

import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {
  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }
  return (
    <Screen style={$screen}>
      <InfinityScrollList
        queryKey={QueryKeys.PostList}
        getList={postService.getList}
        renderItem={renderItem}
        flatListProps={{
          ListHeaderComponent: <HomeHeader />,
        }}
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
