import { AxiosInstance } from 'axios';
import { HttpClient, HttpRequest, HttpResponse } from '../http';

export class AxiosHttpClient implements HttpClient {
  private apiInstance: AxiosInstance;
  private commonUrl: string = '';

  constructor(apiInstance: AxiosInstance, commonUrl?: string) {
    this.apiInstance = apiInstance;
    this.commonUrl = commonUrl || '';
  }

  async request<R>(data: HttpRequest): Promise<HttpResponse<R>> {
    return new Promise((resolve, reject) => {
      this.apiInstance
        .request({
          url: this.commonUrl + data.url,
          method: data.method,
          data: data.data,
          ...data.options,
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
  }
}
