import React from 'react';

import {Box, Text} from '@components';

import {OnboardingPageItem} from '../onboardingData';

type contentProps = Omit<OnboardingPageItem, 'image'>;

export function Content({title, subtitle}: contentProps) {
  return (
    <Box>
      <Text preset="headingLarge">{title}</Text>
      <Text preset="paragraphLarge">{subtitle}</Text>
    </Box>
  );
}
