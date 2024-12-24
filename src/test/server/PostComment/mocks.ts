import {PageAPI} from '@api';
import {PostCommentAPI} from '@domain';

const POST_ID = 1;

const postCommentAPI: PostCommentAPI = {
  id: 97,
  message: 'comentario aleatorio',
  user_id: 4,
  post_id: POST_ID,
  created_at: '2022-01-01T00:00:00.000Z',
  updated_at: '2022-01-01T00:00:00.000Z',
  user: {
    id: 4,
    first_name: 'Maria',
    last_name: 'Julia',
    username: 'mariajulia',
    email: 'mariajulia@coffstack.com',
    profile_url: 'fake-url',
    is_online: true,
    full_name: 'Maria Julia',
  },
  meta: {},
};

const mockedPostCommentResponse: PageAPI<PostCommentAPI> = {
  meta: {
    total: 1,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=1',
    next_page_url: null,
    previous_page_url: null,
  },
  data: [postCommentAPI],
};

export const mockedData = {
  POST_ID,
  mockedPostCommentResponse,
  postCommentAPI,
};
