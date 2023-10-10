import { ApiError, HttpStatusCode } from 'financiamento/bff/core';
import { Produto } from 'financiamento/bff/types/domain';

export interface GetProdutoIdResult extends Produto {}

export interface GetProdutoIdService {
  status: HttpStatusCode;
  data: Produto | ApiError;
}
