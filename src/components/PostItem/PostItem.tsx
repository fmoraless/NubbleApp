import React from 'react';

import {Post} from '@domain';

import {Box, ProfileUser} from '@components';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostImage} from './components/PostImage';

interface Props {
  post: Post;
  hideCommentAction?: boolean;
}

export function PostItem({post, hideCommentAction}: Props) {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <ProfileUser
        user={{
          id: post.author.id,
          username: post.author.userName,
          profileUrl: post.author.profileURL,
        }}
      />
      <PostImage imageURL={post.imageURL} />
      <PostActions hideCommentAction={hideCommentAction} post={post} />
      <PostBottom
        hideCommentAction={hideCommentAction}
        author={post.author}
        commentCount={post.commentCount}
        text={post.text}
        id={post.id}
      />
    </Box>
  );
}
