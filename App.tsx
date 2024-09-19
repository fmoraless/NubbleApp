/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {TextInput} from './src/components/TextInput/TextInput';

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
          <Text mb="s8" preset="headingLarge">
            Hola
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Ingrese su correo
          </Text>

          <Box mb="s20">
            <TextInput
              errorMessage="Error correo"
              placeholder="Ingrese su correo"
              label="Correo"
            />
          </Box>

          <Box>
            <TextInput
              label="Contraseña"
              placeholder="Ingrese su contraseña"
              RightComponent={<Icon name="eyeOn" color="gray2" size={24} />}
            />
          </Box>
          <Text color="primary" preset="paragraphSmall" bold mt="s8">
            Olvidé mi contraseña
          </Text>

          <Button title="Entrar" marginTop="s48" />
          <Button preset="outline" title="Crear cuenta" marginTop="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
