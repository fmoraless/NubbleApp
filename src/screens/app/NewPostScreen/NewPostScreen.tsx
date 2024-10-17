import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NewPostScreen = (props: AppTabScreenProps<'NewPostScreen'>) => {
  return (
    <Screen>
      <Text preset="headingLarge">NewPost Screen</Text>
    </Screen>
  );
};
