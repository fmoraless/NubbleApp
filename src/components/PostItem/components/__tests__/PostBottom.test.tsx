import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

import {mockedPost} from './mockedData/mockedPost';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('it does not show the comment link if it has no comments', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentario/);
    expect(commentLinkElement).toBeFalsy();
  });
  it('navigates to Post comment screen when pressing the comment link', () => {
    render(<PostBottom {...mockedPost} commentCount={4} />);

    const commentLinkElement = screen.getByText(/comentario/);

    fireEvent.press(commentLinkElement);

    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });
});
