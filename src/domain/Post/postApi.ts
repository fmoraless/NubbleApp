import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  let headerList = {
    Authorization:
      'Bearer Mg.tuL8nvtK3BMBn17NRBcyT5sapm3q1X13b2hgebQWkF8kKZ9eYrzH68Nz7d3g',
  };

  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: headerList,
  });
  //TODO: simular una llamada a una API con setTimeout
  let data = await response.json();
  console.log(data);
  return postListMock;
}

export const postApi = {
  getList,
};
