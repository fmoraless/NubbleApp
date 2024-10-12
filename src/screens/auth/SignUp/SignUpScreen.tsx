import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Controller, useForm} from 'react-hook-form';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
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

      <Controller
        control={control}
        name="username"
        rules={{
          required: 'El nombre de usuario es requerido',
        }}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            placeholder="@"
            label="Usuario"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="fullName"
        rules={{
          required: 'El nombre de completo es requerido',
        }}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            placeholder="ej: Juan Pérez"
            label="Nombre completo"
            boxProps={{mb: 's20'}}
          />
        )}
      />

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
            boxProps={{mb: 's48'}}
          />
        )}
      />
      {/* <PasswordInput
        label="Confirmar contraseña"
        placeholder="Repita su contraseña"
        boxProps={{mb: 's48'}}
      /> */}

      <Button
        disabled={!formState.isValid}
        onPress={() => handleSubmit(SubmitForm)}
        title="Crear una cuenta"
      />
    </Screen>
  );
}
