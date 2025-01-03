import React from 'react';
import {Alert, AlertButton} from 'react-native';

import {authCredentialsStorage} from '@services';
import {server, mockedPostComment, resetInMemoryResponse} from '@test';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  waitForElementToBeRemoved,
} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
  resetInMemoryResponse();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
  jest.useRealTimers();
});

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
    expect(comments.length).toBe(3);
  });

  test('When DELETING a comment the list is automatically updated and a toast message is displayed', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];

    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress;
        }
      });

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

    //TODO:  esperar a que se cargue la lista
    //TODO: identificar un comentario que será eliminado
    const comment = await screen.findByText(
      mockedPostComment.mateusPostCommentAPI.message,
      {exact: false},
    );

    expect(comment).toBeTruthy();

    //TODO:  long press en comentario
    fireEvent(comment, 'longPress');

    expect(mockedAlert).toHaveBeenCalled();

    //TODO: presionar "confirmar" en alert
    mockedConfirm && mockedConfirm();

    //TODO: verificar  si la lista fue actualizada (comentario eliminado)
    await waitForElementToBeRemoved(() =>
      // eslint-disable-next-line testing-library/prefer-query-by-disappearance
      screen.getByText(mockedPostComment.mateusPostCommentAPI.message, {
        exact: false,
      }),
    );

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(1);

    //TODO: verificar si el toast fue mostrado
    await waitForElementToBeRemoved(() =>
      expect(screen.getByTestId('toast-message')).toBeTruthy(),
    );

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast-message')).toBeNull();
  });
});
