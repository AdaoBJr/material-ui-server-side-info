import { ApiError } from './api-error';
import { ValidationError } from './types/api-errors.type';

export class Api401Error extends ApiError {
  constructor(
    protected _message?: string,
    validationErrors?: ValidationError[]
  ) {
    super(
      _message,
      'Unauthorized',
      401,
      'Usuário não autenticado',
      validationErrors
    );
  }
}
