import {SafeAreaView, View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen({navigation}) {
  function navigateToSignUpScreen() {
    console.log('navigateToSignUpScreen');
    navigation.navigate('SignUpScreen');
  }
  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Hola
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Ingrese su correo
      </Text>

      <TextInput
        errorMessage="Error correo"
        placeholder="Ingrese su correo"
        label="Correo"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Contraseña"
        placeholder="Ingrese su contraseña"
        boxProps={{mb: 's12'}}
      />

      <Text color="primary" preset="paragraphSmall" bold mt="s8">
        Olvidé mi contraseña
      </Text>

      <Button title="Entrar" marginTop="s48" />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Crear cuenta"
        marginTop="s12"
      />
    </Screen>
  );
}
