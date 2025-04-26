import React from 'react';

import {Post, useReactToPost} from '@domain';

import {Box, Icon, Text, TouchableOpacityBox, IconProps} from '@components';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};
export function PostActions({post, hideCommentAction}: Props) {
  const likeReaction = useReactToPost({post, postReactionType: 'like'});
  const favoriteReaction = useReactToPost({post, postReactionType: 'favorite'});

  function likePost() {
    //TODO: Implement likePost
  }

  function navigateToComments() {
    //TODO: Implement navigateToComments
  }

  function favoritePost() {
    // TODO: Implement favoritePost
  }

  return (
    <Box flexDirection="row" marginTop="s16">
      <Item
        marked={likeReaction.hasReacted}
        onPress={likePost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={post.reactionCount}
      />
      <Item
        disabled={hideCommentAction}
        marked={false}
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={post.commentCount}
      />
      <Item
        marked={favoriteReaction.hasReacted}
        onPress={favoritePost}
        icon={{default: 'bookMark', marked: 'bookMarkFill'}}
        text={post.favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  disabled?: boolean;
}

function Item({onPress, icon, marked, text, disabled}: ItemProps) {
  return (
    <Box flexDirection="row">
      <TouchableOpacityBox
        disabled={disabled}
        flexDirection="row"
        alignItems="center"
        mr="s24"
        onPress={onPress}>
        <Icon
          color={marked ? 'marked' : undefined}
          name={marked ? icon.marked : icon.default}
        />
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      </TouchableOpacityBox>
    </Box>
  );
}
