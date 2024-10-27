import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentItem,
  PostCommentListBottom,
  PostCommentTextMessage,
} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen flex={1} title="Comentarios" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: bottom}}
          ListFooterComponent={
            <PostCommentListBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}
