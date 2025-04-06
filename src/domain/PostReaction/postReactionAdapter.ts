import {userAdapter} from '../User';

import {
  PostReactionBase,
  PostReactionBaseAPI,
  PostReactionAPI,
  PostReaction,
} from './postReactionsType';

function toPostReactionBase(
  postReactionBaseAPI: PostReactionBaseAPI,
): PostReactionBase {
  return {
    id: postReactionBaseAPI.id,
    postId: postReactionBaseAPI.post_id,
    userId: postReactionBaseAPI.user_id,
    emojiType: postReactionBaseAPI.emoji_type,
    isChecked: postReactionBaseAPI.is_checked,
    createdAt: postReactionBaseAPI.created_at,
    updatedAt: postReactionBaseAPI.updated_at,
  };
}

function toPostReaction(PostReactionAPI: PostReactionAPI): PostReaction {
  return {
    ...toPostReactionBase(PostReactionAPI),
    author: userAdapter.toUser(PostReactionAPI.user),
    post: {
      id: PostReactionAPI.post.id,
      text: PostReactionAPI.post.text,
      imageURL: PostReactionAPI.post.image_url,
    },
  };
}

export const postReactionAdapter = {
  toPostReactionBase,
  toPostReaction,
};
