import React from 'react';

import {useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {
  Text,
  Screen,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {showToast} = useToastService();
  const {isLoading, signIn} = useAuthSignIn({
    onError: message => showToast({message, type: 'error'}),
  });
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    //Alert.alert(`Email: ${email}, Password: ${password}`);
    signIn({email, password});
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

      <FormTextInput
        control={control}
        name="email"
        keyboardType="email-address"
        placeholder="Ingrese su correo"
        label="Correo"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Contraseña"
        placeholder="Ingrese su contraseña"
        boxProps={{mb: 's12'}}
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
        loading={isLoading}
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
