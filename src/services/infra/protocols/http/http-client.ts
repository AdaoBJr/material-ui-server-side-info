export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: Object;
};

export interface HttpClient {
  request: <R>(data: HttpRequest) => Promise<HttpResponse<R>>;
}

export type HttpMethod = 'post' | 'put' | 'delete' | 'get';

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  methodNotAllowed = 405,
  serverError = 500,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body: T;
};
