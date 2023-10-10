import { ApiError } from '../api-error';
import { Api400Error } from '../api-400-error';
import { Api401Error } from '../api-401-error';
import { Api403Error } from '../api-403-error';
import { Api404Error } from '../api-404-error';
import { Api500Error } from '../api-500-error';

export enum ApiStatusEnum {
  badRequest = 400,
  notAuthenticated = 401,
  forbidden = 403,
  notFound = 404,
  unexpected = 500,
}

export interface ValidationError {
  field: string;
  message: string;
}

export const apiErrorsType: Record<
  ApiStatusEnum | number,
  (message?: string, validationErrors?: ValidationError[]) => ApiError
> = {
  [ApiStatusEnum.badRequest]: (
    message?: string,
    validationErrors?: ValidationError[]
  ) => new Api400Error(message, validationErrors),

  [ApiStatusEnum.notAuthenticated]: (
    message?: string,
    validationErrors?: ValidationError[]
  ) => new Api401Error(message, validationErrors),

  [ApiStatusEnum.forbidden]: (
    message?: string,
    validationErrors?: ValidationError[]
  ) => new Api403Error(message, validationErrors),

  [ApiStatusEnum.notFound]: (
    message?: string,
    validationErrors?: ValidationError[]
  ) => new Api404Error(message, validationErrors),

  [ApiStatusEnum.unexpected]: (
    message?: string,
    validationErrors?: ValidationError[]
  ) => new Api500Error(message, validationErrors),
};
