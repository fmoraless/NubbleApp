import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import {ImageForUpload, PhotoListPaginated} from './multimediaType';

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  const photoPage = await CameraRoll.getPhotos({first: 12, after: cursor});

  const photoList = photoPage.edges.map(edge => edge.node.image.uri);

  console.log('photos:', cursor);
  console.log('hasNextPage:', photoPage.page_info.has_next_page);

  return {
    photoList,
    cursor: photoPage.page_info.end_cursor,
    hasNextPage: photoPage.page_info.has_next_page,
  };
}

function prepareImageForUpload(imageUri: string): ImageForUpload {
  // TODO: Implement this function
  return {
    uri: imageUri,
    name: 'image.jpg',
    type: 'image/jpeg',
  };
}

export const multimediaService = {prepareImageForUpload, getPhotos};
