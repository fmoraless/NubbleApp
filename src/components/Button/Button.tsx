import {useTheme} from '@shopify/restyle';
import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {Theme} from '../../theme/theme';
import {Box, TouchableOpacityBox} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacityBox
      onPress={() => console.warn('Button Pressed')}
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      justifyContent="center"
      alignItems="center"
      borderRadius="s16">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text variant="paragraphMedium" bold style={{color: '#fff'}}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
