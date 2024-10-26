import React from 'react';

//import {usePostCommentList} from 'src/domain/PostComment/useCases/usePostCommentList';

import {usePostCommentList} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  usePostCommentList(postId);
  return (
    <Screen title="Comentarios" canGoBack>
      <Box>
        <Text preset="headingLarge">Post Comment Screen</Text>
      </Box>
    </Screen>
  );
}
