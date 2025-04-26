import {PostReaction, PostReactionAPI} from '../PostReaction';

export interface Post {
  id: number;
  text: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
  reactions: Pick<PostReaction, 'emojiType' | 'postId'>[];
}

export interface PostAPI {
  id: number; // 1
  text: string;
  user_id: number; // 1
  image_url: string;
  is_fixed: boolean;
  is_activated: boolean;
  created_at: Date;
  updated_at: Date;
  user: {
    id: number; // 1;
    first_name: string; // 'Maria';
    last_name: string; // 'Julia';
    username: string; // 'mariajulia';
    email: string; // 'mariajulia@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
    is_online: boolean; // false;
    full_name: string; // 'Maria Julia';
  };
  status: string; // 'published'
  meta: Meta;
  reactions: Pick<PostReactionAPI, 'emoji_type' | 'post_id'>[];
}

export interface Meta {
  like_count: string; // '9'
  favorite_count: string; // '1'
  comments_count: string; // '2'
}
