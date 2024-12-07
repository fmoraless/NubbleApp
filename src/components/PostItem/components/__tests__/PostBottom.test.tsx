import React from 'react';

import {Post} from '@domain';
import {render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

const mockedPost: Post = {
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

describe('<PostBottom />', () => {
  test('it does not show the comment link if it has no comments', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentario/);
    expect(commentLinkElement).toBeFalsy();
  });
});
