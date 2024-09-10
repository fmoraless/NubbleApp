/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text variant="headingLarge" italic>
            Nubble App
          </Text>

          <Box marginBottom="s24">
            <Button title="Entrar" />
          </Box>

          <Button loading title="Entrar" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
