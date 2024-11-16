import React from 'react';

import {useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormTextInput,
  FormPasswordInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Cuenta creada con éxito.',
  description: '¡Bienvenido a la comunidad!',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {isLoading, signUp} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: 'onChange',
  });
  const submitForm = (formValues: SignUpSchema) => {
    console.log(formValues);
    signUp(formValues);
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
        name="firstName"
        autoCapitalize="words"
        label="Nombre"
        placeholder="ej: Juan"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Apellido"
        placeholder="ej: Pérez"
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
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Crear una cuenta"
      />
    </Screen>
  );
}
