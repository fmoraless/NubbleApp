import React from 'react';

import {render} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  test('the button should be rendered', () => {
    render(<Button title="button title" />);
  });
});
