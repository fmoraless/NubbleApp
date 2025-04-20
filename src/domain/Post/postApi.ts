import {api, apiAdapter, PageAPI} from '@api';
import {ImageForUpload} from '@services';

import {PageParams} from '../../api/apiTypes';

import {postAdapter} from './postAdapter';
import {PostAPI, Post} from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  //await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  });
  return response.data;
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<PostAPI> {
  const form = new FormData();
  form.append('text', text);
  form.append('imageCover', imageCover);

  const response = await api.postForm<PostAPI>('user/post', form);

  return response.data;
}

async function getById(postId: string): Promise<PostAPI> {
  const response = await api.get<PostAPI>(`user/post/${postId}`);
  return response.data;
}

export const postApi = {
  getList,
  createPost,
  getById,
};
