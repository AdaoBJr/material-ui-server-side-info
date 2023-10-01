import { ApiError, HttpStatusCode } from 'bff/core';
import { Produto } from 'bff/types/domain';

export interface GetProdutoIdResult extends Produto {}

export interface GetProdutoIdService {
  status: HttpStatusCode;
  data: Produto | ApiError;
}
