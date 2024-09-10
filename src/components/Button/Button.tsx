import {useTheme} from '@shopify/restyle';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {Theme} from '../../theme/theme';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: colors.carrotSecondary,
        alignItems: 'center',
        borderRadius: 16,
      }}>
      <Text variant="paragraphMedium" bold style={{color: colors.primary}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
