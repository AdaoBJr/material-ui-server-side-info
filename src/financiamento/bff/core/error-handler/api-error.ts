import { ValidationError } from './types/api-errors.type';

export class ApiError extends Error {
  constructor(
    protected _message?: string,
    public name = 'Unknown Error',
    public status: number = -1,
    protected readonly messageDefault = 'Erro desconhecido',
    protected validationErrors: ValidationError[] = []
  ) {
    super(name);
  }

  get getMessage(): string {
    return this._message || this.messageDefault;
  }

  get getValidations(): ValidationError[] {
    return this.validationErrors;
  }
}
