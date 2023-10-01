import axios from 'axios';
import { environment } from 'environment';

export const apiBFF = axios.create({
  baseURL: environment.URL_BFF,
  // headers: {
  //   client_id: env.URL_ESTOQUE,
  // },
});
