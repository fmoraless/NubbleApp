import React from 'react';

import {Box} from '@components';

import {OnboardingScreenProps} from '../../../routes/navigationType';

import OnboardingPage from './components/OnboardingPage';

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  return (
    <Box flex={1}>
      <OnboardingPage />
    </Box>
  );
}

export default OnboardingScreen;
