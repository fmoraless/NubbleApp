import React from 'react';
import {ButtonProps, StyleSheet} from 'react-native';

import {render, fireEvent, screen} from 'test-utils';

import {theme} from '@theme';

import {Button} from '../Button';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="button title" {...props} />);

  const titleElement = screen.getByText(/button title/i);

  return {
    titleElement,
  };
}

describe('<Button />', () => {
  it('calls the onPress function when is pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({onPress: mockedOnPress});

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('does not call onpPress function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });
  it('the title should be gray if button is disabled', () => {
    const {titleElement} = renderComponent({
      disabled: true,
    });

    const titleStyle = StyleSheet.flatten(titleElement.props.style);

    expect(titleStyle.color).toEqual(theme.colors.gray2);

    //screen.debug();
  });
});
