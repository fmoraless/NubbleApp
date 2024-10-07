import {useEffect, useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type LoginFormType = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  /*  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {emailErrorMessage, setEmailErrorMessage} = useState('');
  const {passwordErrorMessage, setPasswordErrorMessage} = useState('');

  useEffect(() => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    setEmailErrorMessage(isValidEmail ? '' : 'Correo inválido');
  }, [email]); */

  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginFormType) {
    Alert.alert(`Email: ${email}, Password: ${password}`);
  }
  function navigateToSignUpScreen() {
    console.log('navigateToSignUpScreen');
    navigation.navigate('SignUpScreen');
  }

  function navigateToResetPasswordScreen() {
    console.log('navigateToResetPasswordScreen');
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Hola
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Ingrese su correo
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Correo requerido',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Correo inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            keyboardType="email-address"
            placeholder="Ingrese su correo"
            label="Correo"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Contraseña requerida',
          minLength: {
            value: 8,
            message: 'Contraseña debe tener al menos 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            value={field.value}
            errorMessage={fieldState.error?.message}
            onChangeText={field.onChange}
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            boxProps={{mb: 's12'}}
          />
        )}
      />

      <Text
        onPress={navigateToResetPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold
        mt="s8">
        Olvidé mi contraseña
      </Text>

      <Button
        //disabled={!!emailErrorMessage || password.length < 6}
        disabled={!formState.isValid}
        title="Entrar"
        marginTop="s48"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Crear cuenta"
        marginTop="s12"
      />
    </Screen>
  );
}
