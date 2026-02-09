import React from 'react';

import {ProfileTemplate} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  //console.log('route.params', route.params);
  const userId = route.params.userId;

  return <ProfileTemplate userId={userId} />;
}
