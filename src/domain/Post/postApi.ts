import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODO: simular una llamada a una API con setTimeout
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(postListMock);
    }, 2000);
  });
  //return postListMock;
}

export const postApi = {
  getList,
};
