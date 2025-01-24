import axios from 'axios';

export const BASE_URL = 'http://192.168.1.82:3333/';
export const api = axios.create({
  baseURL: BASE_URL,
});
