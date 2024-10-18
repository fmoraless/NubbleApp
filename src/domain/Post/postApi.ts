import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODO: simular una llamada a una API
  return postListMock;
}

export const postApi = {
  getList,
};
