import {SafeAreaView, View} from 'react-native';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
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

      <TextInput
        label="Contraseña"
        placeholder="Ingrese su contraseña"
        RightComponent={<Icon name="eyeOn" color="gray2" size={24} />}
        boxProps={{mb: 's12'}}
      />

      <Text color="primary" preset="paragraphSmall" bold mt="s8">
        Olvidé mi contraseña
      </Text>

      <Button title="Entrar" marginTop="s48" />
      <Button preset="outline" title="Crear cuenta" marginTop="s12" />
    </Screen>
  );
}
