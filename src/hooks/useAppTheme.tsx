import {useTheme} from '@shopify/restyle';
import React from 'react';
import {Theme} from '../theme/theme';

export function useAppTheme() {
  return useTheme<Theme>();
}
