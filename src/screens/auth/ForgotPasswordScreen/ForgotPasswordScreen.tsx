import React from 'react';

import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Text, Screen} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Correo enviado',
  description:
    'Hemos enviado un enlace a su correo para recuperar su contraseña.',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {reset} = useResetNavigationSuccess();

  const {showToast} = useToastService();

  const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
    onSuccess: () => reset(resetParam),
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm(values: ForgotPasswordSchema) {
    console.log('submitForm');

    requestNewPassword(values.email);

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
        autoCapitalize="none"
        name="email"
        label="Correo"
        placeholder="ej: correo@examaploe.com"
        boxProps={{mb: 's40'}}
      />
      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar contraseña"
        marginTop="s12"
      />
    </Screen>
  );
}
