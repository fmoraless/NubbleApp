import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Text, Screen} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {RootStackParamList} from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
    console.log('submitForm');

    reset({
      title: 'Correo enviado',
      description:
        'Hemos enviado un enlace a su correo para recuperar su contraseña.',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
    /* navigation.navigate('SuccessScreen', {
      title: 'Correo enviado',
      description:
        'Hemos enviado un enlace a su correo para recuperar su contraseña.',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    }); */
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Recuperar Contraseña
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite su correo y enviaremos un enlace para recuperar su contraseña
      </Text>
      <FormTextInput
        control={control}
        keyboardType="email-address"
        name="email"
        label="Correo"
        placeholder="ej: correo@examaploe.com"
        boxProps={{mb: 's40'}}
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar contraseña"
        marginTop="s12"
      />
    </Screen>
  );
}
