import React from 'react';

import {Post} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

type Props = Pick<Post, 'author'>;

export const PostHeader = ({author}: Props) => {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} size={32} />

      <Text ml="s12" semibold preset="paragraphMedium">
        {author.userName}
      </Text>
    </Box>
  );
};
