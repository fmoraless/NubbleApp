import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'OQ.SPzsFhHhv53BYQGs3VLIN5IqN-ZjXS57BF_QrTzlSNZpWDWCLA_Yn_MAOPKL',
  },
});
