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
  user: User;
  status: string; // 'published'
  meta: Meta;
}

export interface Meta {
  like_count: string; // '9'
  favorite_count: string; // '1'
  comments_count: string; // '2'
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  profile_url: string;
  is_online: boolean;
  full_name: string;
}
