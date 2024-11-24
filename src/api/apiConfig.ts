import axios from 'axios';

export const api = axios.create({
  //baseURL: 'http://192.168.56.1:3333/',
  baseURL: 'http://192.168.1.81:3333/',
});
