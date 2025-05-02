import {Post, PostReactionBase} from '@domain';

export const postWithoutLike: Post = {
  id: 1,
  imageURL: 'https://www.google.com',
  commentCount: 3,
  favoriteCount: 2,
  reactionCount: 5,
  text: 'Post text',
  author: {
    id: 2,
    name: 'Maria Julia',
    profileURL: 'https://www.google.com',
    userName: 'mariajulia',
  },
  reactions: [],
};

const postWithoutLikeResponse: PostReactionBase = {
  id: 4,
  emojiType: 'like',
  postId: postWithoutLike.id,
  userId: 1,
  createdAt: '2023-10-01T00:00:00.000Z',
  updatedAt: '2023-10-01T00:00:00.000Z',
  isChecked: true,
};

export const mockedPostWithoutLike = {
  post: postWithoutLike,
  response: postWithoutLikeResponse,
};
