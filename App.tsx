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
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/icons/EyeOnIcon';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Nubble App
          </Text>

          <Icon name="eyeOn" size={30} />
          <Icon name="eyeOff" color="red" size={30} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
