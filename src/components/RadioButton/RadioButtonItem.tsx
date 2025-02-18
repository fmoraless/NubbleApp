import React from 'react';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

import {RadioButton, RadiobuttonProps} from './RadioButton';

export type RadioButtonItemProps = RadiobuttonProps & {
  label: string;
  description?: string;
};

export function RadioButtonItem({
  label,
  description,
  ...radioButtonProps
}: RadioButtonItemProps) {
  return (
    <Box paddingVertical="s16">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text semibold>{label}</Text>
        <RadioButton {...radioButtonProps} />
      </Box>
      {description && (
        <Text style={{width: '80%'}} color="paragraphSecondary">
          {description}
        </Text>
      )}
    </Box>
  );
}
