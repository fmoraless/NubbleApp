import React from 'react';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const PostCommentScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
}: AppScreenProps<'PostCommentScreen'>) => {
  //route.params
  return (
    <Screen title="Comentarios" canGoBack>
      <Box>
        <Text preset="headingLarge">Post Comment Screen</Text>
      </Box>
    </Screen>
  );
};