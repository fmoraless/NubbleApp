import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - SCREEN_WIDTH) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlasOn] = useState(false);

  function toggleFlash() {
    setFlasOn(prev => !prev);
  }

  return (
    <Box flex={1}>
      <Box backgroundColor="grayWhite" style={StyleSheet.absoluteFill} />
      <Box flex={1} justifyContent="space-between">
        <Box {...$controlAreaTop} style={{paddingTop: top}}>
          <Icon
            name="arrowLeft"
            size={20}
            color="grayWhite"
            onPress={navigation.goBack}
          />
          <Icon
            name={flashOn ? 'flashOn' : 'flashOff'}
            size={20}
            color="grayWhite"
            onPress={toggleFlash}
          />
          <Box width={20} />
        </Box>
        <Box {...$controlAreaBottom}>
          <Icon name="cameraClick" color="grayWhite" />
        </Box>
      </Box>
    </Box>
  );
}

const $controlAreaTop: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT - CONTROL_DIFF,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
};

const $controlAreaBottom: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT + CONTROL_DIFF,
  alignItems: 'center',
  justifyContent: 'center',
};
