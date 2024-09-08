/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text variant="headingLarge" italic>
        Test
      </Text>
    </SafeAreaView>
  );
}

export default App;
