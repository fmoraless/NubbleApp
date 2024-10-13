import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {SignUpSchema, signUpSchema} from './signUpSchema';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const SubmitForm = (formValues: SignUpFormType) => {
    console.log('formValues', formValues);
    /* reset({
      title: 'Cuenta creada con éxito.',
      description: '¡Bienvenido a la comunidad!',
      icon: {
        name: 'checkRound',
      },
    }); */
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
        onPress={() => handleSubmit(SubmitForm)}
        title="Crear una cuenta"
      />
    </Screen>
  );
}
