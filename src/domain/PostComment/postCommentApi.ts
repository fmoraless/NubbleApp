import {api, PageAPI} from '@api';

import {PageParams} from '../../api/apiTypes';

import {PostCommentAPI} from './postCommentTypes';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  //await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await api.get<PageAPI<PostCommentAPI>>('user/post_comment', {
    params: {
      post_id,
      ...pageParams,
    },
  });
  return response.data;
}

export const postCommentApi = {
  getList,
};
