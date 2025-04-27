import React from 'react';

import {Post, useReactToPost} from '@domain';
import {QueryKeys} from '@infra';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox, IconProps} from '@components';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};
export function PostActions({post, hideCommentAction}: Props) {
  const navigation = useNavigation();
  const likeReaction = useReactToPost({post, postReactionType: 'like'});
  const favoriteReaction = useReactToPost({
    post,
    postReactionType: 'favorite',
    queryKeys: [QueryKeys.FavoriteList],
  });

  function navigateToComments() {
    navigation.navigate('PostCommentScreen', {
      postId: post.id,
      postAuthorId: post.author.id,
    });
  }

  return (
    <Box flexDirection="row" marginTop="s16">
      <Item
        marked={likeReaction.hasReacted}
        onPress={likeReaction.reactToPost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={likeReaction.reactionCount}
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
        onPress={favoriteReaction.reactToPost}
        icon={{default: 'bookMark', marked: 'bookMarkFill'}}
        text={favoriteReaction.reactionCount}
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
