import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let headerList = {
    Authorization:
      'Bearer Mg.tuL8nvtK3BMBn17NRBcyT5sapm3q1X13b2hgebQWkF8kKZ9eYrzH68Nz7d3g',
  };

  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: headerList,
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;
}

export const postApi = {
  getList,
};
