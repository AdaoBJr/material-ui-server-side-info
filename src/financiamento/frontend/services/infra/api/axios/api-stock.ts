import axios from 'axios';
import { getEnv } from 'environment';

const env = getEnv();
export const apiStock = axios.create({
  baseURL: env.URL_ESTOQUE,
  // headers: {
  //   client_id: env.URL_ESTOQUE,
  // },
});
