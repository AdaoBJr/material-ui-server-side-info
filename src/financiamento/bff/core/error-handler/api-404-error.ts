import { ApiError } from './api-error';
import { ValidationError } from './types/api-errors.type';

export class Api404Error extends ApiError {
  constructor(
    protected _message?: string,
    validationErrors?: ValidationError[]
  ) {
    super(_message, 'Not found', 404, 'Item não encontrado', validationErrors);
  }
}
