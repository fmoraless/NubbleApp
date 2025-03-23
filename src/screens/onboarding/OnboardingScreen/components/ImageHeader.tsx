import React from 'react';
import {Dimensions, Image} from 'react-native';

import {useAppColor} from '@services';

import {Box} from '@components';

import {OnboardingPageItem} from '../onboardingData';

const SCREEN_WIDTH = Dimensions.get('window').width;

type ImageHeaderProps = {
  image: OnboardingPageItem['image'];
};

const ImageHeader = ({image}: ImageHeaderProps) => {
  const appColor = useAppColor();
  const source = appColor === 'light' ? image.light : image.dark;
  return (
    <Box>
      <Image source={source} style={{width: SCREEN_WIDTH, height: '100%'}} />
    </Box>
  );
};

export default ImageHeader;
