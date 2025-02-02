import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {multimediaService} from '@services';
import {
  Camera,
  Templates,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';

import {Box, BoxProps, Icon, PermissionManager} from '@components';
import {useAppState} from '@hooks';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - SCREEN_WIDTH) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlasOn] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  const camera = useRef<Camera>(null);
  const format = useCameraFormat(device, Templates.Instagram);

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active';

  async function takePhoto() {
    if (camera.current) {
      const photoFile = await camera.current?.takePhoto({
        flash: flashOn ? 'on' : 'off',
        // qualityPrioritization: 'speed',
      });

      navigation.navigate('PublishPostScreen', {
        imageUri: multimediaService.prepareImageUri(photoFile.path),
      });
    }
  }

  function toggleFlash() {
    setFlasOn(prev => !prev);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Necesitamos acceder a la cámara para poder tomar fotos.">
      <Box flex={1}>
        <Box backgroundColor="grayWhite" style={StyleSheet.absoluteFill} />
        {device != null && (
          <Camera
            ref={camera}
            format={format}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            photo={true}
            onInitialized={() => setIsReady(true)}
            enableHighQualityPhotos={true}
          />
        )}

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
            {isReady && (
              <Icon name="cameraClick" color="grayWhite" onPress={takePhoto} />
            )}
          </Box>
        </Box>
      </Box>
    </PermissionManager>
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
