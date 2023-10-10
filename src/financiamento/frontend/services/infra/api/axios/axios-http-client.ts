import { AxiosInstance } from 'axios';
import { HttpClient, HttpRequest, HttpResponse } from '../../protocols';

export const AxiosHttpClient = (apiInstance: AxiosInstance): HttpClient => {
  const request = <R>(data: HttpRequest): Promise<HttpResponse<R>> => {
    return new Promise((resolve, reject) => {
      apiInstance
        .request({
          url: data.url,
          method: data.method,
          data: data.body,
        })
        .then((response) =>
          resolve({
            statusCode: response.status,
            body: response.data,
          })
        )
        .catch((error) => {
          reject({
            ...error,
            statusCode: error.response.status,
            body: error.response.data,
          });
        });
    });
  };

  return { request };
};
