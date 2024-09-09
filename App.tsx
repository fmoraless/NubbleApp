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

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text variant="headingLarge" italic>
          Nubble App
        </Text>
        <Button title="Entrar" />
      </View>
    </SafeAreaView>
  );
}

export default App;
