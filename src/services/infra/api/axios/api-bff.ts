import axios from 'axios';

export const apiBFF = axios.create({
  baseURL: '/api',
  // headers: {
  //   client_id: env.URL_ESTOQUE,
  // },
});
