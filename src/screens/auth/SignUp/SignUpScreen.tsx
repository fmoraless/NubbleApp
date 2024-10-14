import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormTextInput,
  FormPasswordInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {RootStackParamList} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const submitForm = (formValues: SignUpSchema) => {
    console.log('formValues', formValues);
    reset({
      title: 'Cuenta creada con éxito.',
      description: '¡Bienvenido a la comunidad!',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  };
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Crear una cuenta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        placeholder="@"
        label="Usuario"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        autoCapitalize="words"
        label="Nombre completo"
        placeholder="ej: Juan Pérez"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        keyboardType="email-address"
        label="Correo"
        placeholder="ej: correo@example.com"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Contraseña"
        placeholder="Ingrese su contraseña"
        boxProps={{mb: 's20'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Crear una cuenta"
      />
    </Screen>
  );
}
