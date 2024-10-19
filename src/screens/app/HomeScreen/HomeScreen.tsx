import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {postService} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

import {Post} from '../../../domain/Post/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {
  const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Box marginBottom="s24">
        <Box flexDirection="row">
          <Image
            source={{uri: item.author.profileURL}}
            style={{width: 32, height: 32, borderRadius: 16}}
          />
          <Text>{item.author.name}</Text>
        </Box>
        <Image
          source={{uri: item.imageURL}}
          style={{width: Dimensions.get('screen').width, height: 300}}
          resizeMode="cover"
        />
      </Box>
    );
  }
  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
};
