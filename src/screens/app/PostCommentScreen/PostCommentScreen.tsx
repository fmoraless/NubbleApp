import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList, usePostGetById} from '@domain';
import {useAuthCredentials} from '@services';

import {Box, PostItem, Screen} from '@components';
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
  const postAuthorId = route.params.postAuthorId;
  const showPost = route.params.showPost || false;

  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);

  const {post} = usePostGetById(postId, showPost);

  const {userId} = useAuthCredentials();

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postId={postId}
        postComment={item}
        userId={userId}
        postAuthorId={postAuthorId}
      />
    );
  }

  return (
    <Screen
      noPaddingHorizontal
      flex={1}
      title={showPost ? 'Post ' : 'Comentarios'}
      canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: bottom}}
          ListHeaderComponent={
            post && <PostItem hideCommentAction post={post} />
          }
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
