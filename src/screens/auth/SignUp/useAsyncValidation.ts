import {useAuthIsEmailAvailable, useAuthIsUserNameAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchema} from './signUpSchema';

type Props = {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
};

type ReturnValues = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};
export function useAsyncValidation({watch, getFieldState}: Props): {
  userNameValidation: ReturnValues;
  emailValidation: ReturnValues;
} {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;

  const userNameQuery = useAuthIsUserNameAvailable({
    username,
    enabled: usernameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = !emailState.invalid && emailState.isDirty;

  const emailQuery = useAuthIsEmailAvailable({
    email,
    enabled: emailIsValid,
  });

  return {
    userNameValidation: {
      errorMessage: userNameQuery.isUnavailable
        ? 'username ya está en uso'
        : undefined,
      notReady: userNameQuery.isFetching || userNameQuery.isUnavailable,
      isFetching: userNameQuery.isFetching,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavailable
        ? 'email ya está en uso'
        : undefined,
      notReady: emailQuery.isFetching || emailQuery.isUnavailable,
      isFetching: emailQuery.isFetching,
    },
  };
}
