import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';

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
