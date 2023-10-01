import { ApiError } from './api-error';
import { apiErrorsType, ValidationError } from './types/api-errors.type';

export function apiErrorHandler(
  status: number,
  message?: string,
  validationErrors: ValidationError[] = []
): ApiError {
  return apiErrorsType[status]?.(message, validationErrors) ?? new ApiError();
}
