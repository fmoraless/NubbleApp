import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.rQL6h03KMb5EFg1Mb9rzb8-XCla6uOA8VyJgAydBjQiremNnU4YpcLRCYqON',
  },
});
