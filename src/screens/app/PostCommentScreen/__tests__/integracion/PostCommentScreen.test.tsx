import React from 'react';

import {server} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('integracion: PostCommentScreen', () => {
  test('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(/comentario aleatorio/i);

    expect(comment).toBeTruthy();

    // TODO: encontrar el campo de input
    const inputText = screen.getByPlaceholderText(/escribe un comentario/i);

    // TODO: escribir un comentario
    fireEvent.changeText(inputText, 'Nuevo comentario');
    // TODO: click en enviar el comentario
    fireEvent.press(screen.getByText(/enviar/i));

    // TODO: esperar a que la lista se actualice con el nuevo comentario
    const newComment = await screen.findByText(/Nuevo comentario/i);
    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id');
    expect(comments.length).toBe(2);
  });
});
