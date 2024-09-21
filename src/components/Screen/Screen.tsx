import React from 'react';
import {Box} from '../Box/Box';
import {Platform} from 'react-native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

interface ScreenProps {
  children?: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({children, canGoBack = false}: ScreenProps) {
  const {top} = useAppSafeArea();

  console.log({
    device: Platform.OS,
    top: top,
  });
  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {canGoBack && (
        <Box mb="s24" flexDirection="row">
          <Icon name="eyeOn" color="primary" />
          <Text preset="paragraphMedium" semibold ml="s8">
            Volver
          </Text>
        </Box>
      )}
      {children}
    </Box>
  );
}
