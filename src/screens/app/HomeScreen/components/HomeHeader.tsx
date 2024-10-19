import React from 'react';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <Box backgroundColor="carrotSecondary" height={16} width={70} />
      <Box flexDirection="row">
        <Box mr="s24">
          <Icon name="search" />
        </Box>
        <Box mr="s24">
          <Icon name="bellOn" />
        </Box>
        <Box mr="s24">
          <Icon name="comment" />
        </Box>
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  backgroundColor: 'carrotSecondaryLight',
  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
};