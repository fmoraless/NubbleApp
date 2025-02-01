import {ImageForUpload} from './multimediaType';

function prepareImageForUpload(imageUri: string): ImageForUpload {
  // TODO: Implement this function
  return {
    uri: imageUri,
    name: 'image.jpg',
    type: 'image/jpeg',
  };
}

export const multimediaService = {prepareImageForUpload};
