import React, {useEffect, useState} from 'react';

import {postService} from '@domain';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

import {Post} from '../../../domain/Post/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    postService.getList().then(list => console.log(list));
  }, []);

  return (
    <Screen>
      {postList.map(post => (
        <Text key={post.id}>{post.text}</Text>
      ))}
    </Screen>
  );
};
