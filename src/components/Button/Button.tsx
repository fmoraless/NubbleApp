import {useTheme} from '@shopify/restyle';
import React from 'react';
import {Text} from '../Text/Text';

import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ThemeColors} from '../../theme/theme';
import {buttonPresets} from './buttonPresets';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

/**
 * UI
 * preset: primary y secondary
 * default, disabled, loading
 */
export type ButtonPreset = 'primary' | 'outline' | 'secondary' | 'disabled';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      justifyContent="center"
      alignItems="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} size={30} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
