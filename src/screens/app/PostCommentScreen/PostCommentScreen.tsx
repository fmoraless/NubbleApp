import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen, TextMessage} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {PostCommentItem, PostCommentListBottom} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const [message, setMessage] = useState('');

  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  function onPressSend() {}

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
        <TextMessage
          placeholder="Escribe un comentario"
          onPressSend={onPressSend}
          value={message}
          onChangeText={setMessage}
        />
      </Box>
    </Screen>
  );
}
