import {Post} from '@domain';

export const mockedPost: Post = {
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
};
