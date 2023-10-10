import { ApiError } from './api-error';
import { ValidationError } from './types/api-errors.type';

export class Api500Error extends ApiError {
  constructor(
    protected _message?: string,
    validationErrors?: ValidationError[]
  ) {
    super(_message, 'Unexpected', 500, 'Erro inesperado', validationErrors);
  }
}
