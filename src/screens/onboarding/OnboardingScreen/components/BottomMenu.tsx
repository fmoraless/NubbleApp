import React from 'react';

import {Box, Icon, Text} from '@components';

export function BottomMenu() {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Text>Saltar</Text>
      <Box flexDirection="row" alignItems="center">
        <Text mr="s4">Siguiente</Text>
        <Icon name="arrowRight" />
      </Box>
    </Box>
  );
}
