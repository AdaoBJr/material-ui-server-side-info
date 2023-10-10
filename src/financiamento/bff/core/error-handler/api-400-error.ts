import { ApiError } from './api-error';
import { ValidationError } from './types/api-errors.type';

export class Api400Error extends ApiError {
  constructor(
    protected _message?: string,
    validationErrors?: ValidationError[]
  ) {
    super(
      _message,
      'Bad Request',
      400,
      'Requisição feita de forma incorreta',
      validationErrors
    );
  }
}
