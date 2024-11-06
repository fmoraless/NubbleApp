import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'MTA.45t8swlGF7qqt-ai-hiYp43YN248DfekStckvHpHs4_aAWzZKFS-tkhi0H2-',
  },
});
