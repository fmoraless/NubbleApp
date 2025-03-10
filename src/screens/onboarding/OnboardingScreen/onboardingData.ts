import {ImageProps} from 'react-native';

import {images} from '@assets';

export type OnboardingPageItem = {
  title: string;
  subtitle: string;
  image: {
    light: ImageProps['source'];
    dark: ImageProps['source'];
  };
};

const page1: OnboardingPageItem = {
  title: 'Welcome to the app',
  subtitle: 'This is a subtitle',
  image: {
    light: images.onbardingLight1,
    dark: images.onbardingDark1,
  },
};

export const onboardingPages: OnboardingPageItem[] = [page1];
