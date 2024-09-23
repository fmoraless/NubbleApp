import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

export function SignUpScreen() {
  const SubmitForm = () => {
    // TODO: implementar submit form
  };
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Crear una cuenta
      </Text>

      <TextInput placeholder="@" label="Usuario" boxProps={{mb: 's20'}} />
      <TextInput
        placeholder="ej: Juan Pérez"
        label="Nombre completo"
        boxProps={{mb: 's20'}}
      />

      <TextInput
        placeholder="ej: usuario@example.com"
        label="Correo"
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
        label="Contraseña"
        placeholder="Ingrese su contraseña"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Confirmar contraseña"
        placeholder="Repita su contraseña"
        boxProps={{mb: 's48'}}
      />

      <Button onPress={() => SubmitForm()} title="Crear una cuenta" />
    </Screen>
  );
}