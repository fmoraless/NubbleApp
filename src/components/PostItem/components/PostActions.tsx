import React from 'react';

import {Post} from '@domain';

import {Box, Icon, Text, TouchableOpacityBox, IconProps} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;
export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
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
        marked={true}
        onPress={likePost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={reactionCount}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={commentCount}
      />
      <Item
        marked={false}
        onPress={favoritePost}
        icon={{default: 'bookMark', marked: 'bookMarkFill'}}
        text={favoriteCount}
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
}

function Item({onPress, icon, marked, text}: ItemProps) {
  return (
    <Box flexDirection="row">
      <TouchableOpacityBox
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
