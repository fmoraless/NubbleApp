import React from 'react';

import {beforeAll} from '@jest/globals';
import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';
import {act, fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});
afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
  jest.resetAllMocks();
});

describe('integration: SearchScreen', () => {
  test('Search Flow', async () => {
    //1. Navigate to Search screen
    renderScreen(<AppStack initialRouteName="SearchScreen" />);
    //screen.debug();

    //2. find the search input and type  user name
    const inputText = screen.getByPlaceholderText(/buscar/i);
    expect(inputText).toBeTruthy();
    fireEvent.changeText(inputText, 'mar');
    act(() => jest.runAllTimers());

    //3. find to users per the MSW mock
    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    //4. Click on the first user and navigate to Profile Screen
    fireEvent.press(user1);

    //5. Check if the user full name is displayed
    const userFullName = await screen.findByText(userMocked.user1.full_name);
    expect(userFullName).toBeTruthy();

    //6. Press the back button to navigate back to Search screen
    const backButton = screen.getByTestId('screen-back-button');
    fireEvent.press(backButton);

    //7. Clean the search input
    const inputTextAfterBack = screen.getByPlaceholderText(/buscar/i);
    fireEvent.changeText(inputTextAfterBack, '');
    act(() => jest.runAllTimers());

    // 8. Make sure the search history (recent searches) is displayed
    const searchHistoryTitle = screen.getByText(/búsquedas recientes/i);
    expect(searchHistoryTitle).toBeTruthy();

    // 9. The user1 (pressed) was the saved in the search history
    const user1AfterBack = screen.queryByText(userMocked.user1.username);
    expect(user1AfterBack).toBeTruthy();

    // 10. The user2 (no pressed) must NOT appear in the search history
    const user2AfterBack = screen.queryByText(userMocked.user2.username);
    expect(user2AfterBack).toBeFalsy();
    // 11. Remove user1 from the search history by pressing the trash icon
    const trashIcon = screen.getByTestId('trash');
    fireEvent.press(trashIcon);
    // 12. Makee sure the user1 was removed  from the search history
    const user1AfterRemove = screen.queryByText(userMocked.user1.username);
    expect(user1AfterRemove).toBeFalsy();
  });
});
