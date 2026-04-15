import React from 'react';

import {User} from '@domain';

import {ProfileAvatar, Text, Box} from '@components';

import {ProfileMetadata} from './ProfileMetadata';

interface Props {
  user: User;
}
export function ProfileHeader({user}: Props) {
  return (
    <Box alignItems="center">
      <ProfileAvatar imageURL={user?.profileUrl} size={100} borderRadius={40} />
      <Text preset="headingMedium" mt="s16">
        {user?.fullName}
      </Text>
      <Text preset="paragraphLarge" mt="s4" color="gray1">
        @{user?.username}
      </Text>

      <ProfileMetadata
        followersCount="105"
        followingCount="200"
        publicationCount="50"
      />
    </Box>
  );
}
