import React from 'react';

import {useSettingsService, useThemePreference} from '@services';

import {Screen, RadioButtonSelector, Text} from '@components';
import {AppScreenProps} from '@routes';

type ThemePreference = 'light' | 'dark' | 'system';

type Option = {
  label: string;
  description?: string;
  themePreference: ThemePreference;
};

const items: Option[] = [
  {
    label: 'Activado',
    themePreference: 'dark',
  },
  {
    label: 'Desactivado',
    themePreference: 'light',
  },
  {
    label: 'Sistema',
    themePreference: 'system',
    description: 'La apariencia que usted configuró en su dispositivo',
  },
];

export function DarkModeScreen({}: AppScreenProps<'DarkModeScreen'>) {
  //const [selectedItem, setSelectedItem] = useState<Option>();
  const themePreference = useThemePreference();
  const {setThemePreference} = useSettingsService();

  const selectedItem = items.find(
    item => item.themePreference === themePreference,
  );

  function setSelectedItem(item: Option) {
    setThemePreference(item.themePreference);
  }

  return (
    <Screen canGoBack title="Modo oscuro">
      <RadioButtonSelector
        items={items}
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
        labelKey="label"
        valueKey="themePreference"
        descriptionKey="description"
      />

      <Text preset="paragraphLarge" mt="s48">
        {JSON.stringify(selectedItem, null, 2)}
      </Text>
    </Screen>
  );
}
