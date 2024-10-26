import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}
export const PostCommentListBottom = ({fetchNextPage, hasNextPage}: Props) => {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text color="primary" textAlign="center">
          Ver más
        </Text>
      </Pressable>
    );
  }
  return null;
};
