import { ApiError } from './api-error';
import { ValidationError } from './types/api-errors.type';

export class Api403Error extends ApiError {
  constructor(
    protected _message?: string,
    validationErrors?: ValidationError[]
  ) {
    super(
      _message,
      'Forbidden',
      403,
      'Usuário não autorizado',
      validationErrors
    );
  }
}
