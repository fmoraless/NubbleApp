import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {OnboardingPageProps} from './OnboardingPage';

type BottomMenuProps = Pick<
  OnboardingPageProps,
  'onPressNext' | 'onPressSkip'
> & {
  isLast?: boolean;
};

export function BottomMenu({
  onPressNext,
  onPressSkip,
  isLast,
}: BottomMenuProps) {
  const nextText = isLast ? 'Comenzar' : 'Siguiente';

  return (
    <Box flexDirection="row" justifyContent="space-between">
      <PressableBox onPress={onPressSkip}>
        <Text semibold color="gray2">
          Saltar
        </Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        onPress={onPressNext}
        flexDirection="row"
        alignItems="center">
        <Text bold mr="s4">
          {nextText}
        </Text>
        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  );
}
