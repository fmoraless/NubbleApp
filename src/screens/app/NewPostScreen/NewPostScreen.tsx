import React from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NewPostScreen = (props: AppTabScreenProps<'NewPostScreen'>) => {
  const {list} = useCameraRoll();
  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Image
        key={item}
        source={{uri: item}}
        style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
      />
    );
  }

  return (
    <Screen noPaddingHorizontal canGoBack title="Nuevo post">
      <FlatList numColumns={NUM_COLUMNS} data={list} renderItem={renderItem} />
    </Screen>
  );
};
