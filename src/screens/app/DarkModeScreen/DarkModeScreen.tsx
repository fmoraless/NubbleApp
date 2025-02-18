import React from 'react';

import {Screen, RadioButtonSelector} from '@components';
import {AppScreenProps} from '@routes';

const items = [
  {
    label: 'Activado',
    onPress: () => {},
    isSelected: false,
  },
  {
    label: 'Desactivado',
    isSelected: true,
    onPress: () => {},
  },
  {
    label: 'Sistema',
    onPress: () => {},
    isSelected: false,
    description: 'La apariencia que usted configuró en su dispositivo',
  },
];

export function DarkModeScreen({}: AppScreenProps<'DarkModeScreen'>) {
  return (
    <Screen canGoBack title="Modo oscuro">
      <RadioButtonSelector items={items} />
    </Screen>
  );
}
