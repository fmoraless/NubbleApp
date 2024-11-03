import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NQ.NK6AEJ-00AiAV9IxgZVls-Yq_BcbDIaruCWrAchMbUh8HViHRyqYcVJllHFe',
  },
});
