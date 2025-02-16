import React from 'react';

import {Icon, PressableBox, Text} from '@components';

export type MenuItemProps = {
  label: string;
  onPress: () => void;
};

export function MenuItem({label, onPress}: MenuItemProps) {
  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      paddingVertical="s16"
      justifyContent="space-between"
      onPress={onPress}>
      <Text semibold>{label}</Text>
      <Icon name="chevronRight" />
    </PressableBox>
  );
}
