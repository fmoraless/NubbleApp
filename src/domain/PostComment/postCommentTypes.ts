export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; //105,
  message: string; // "Soleo temporibus quae alias subnecto alo studio pariatur enim.",
  user_id: number; //9,
  post_id: number; //1,
  createdAt: string; //"2024-10-21T07:46:38.000-03:00",
  updatedAt: string; //"2024-10-22T20:34:59.382-03:00",
  user: {
    id: number; //9,
    first_name: string; // "Carla",
    last_name: string; // "Santos",
    username: string; // "carlasantos",
    email: string; // "carlasantos@coffstack.com",
    profile_url: string; // "https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/2-carla.png",
    is_online: boolean; // false,
    full_name: string; // "Carla Santos"
  };
  meta: any; // {}
}
