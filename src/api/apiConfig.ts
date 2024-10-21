import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.tuL8nvtK3BMBn17NRBcyT5sapm3q1X13b2hgebQWkF8kKZ9eYrzH68Nz7d3g',
  },
});
