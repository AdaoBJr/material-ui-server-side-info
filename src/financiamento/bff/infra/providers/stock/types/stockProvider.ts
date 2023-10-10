import { HttpResponse } from 'financiamento/bff/core';
import { Produto } from 'financiamento/bff/types/domain';

export interface GetProduto {
  results: Produto[];
}

export interface StockProvider {
  //PRODUTO
  getProdutoId(produto: string): Promise<HttpResponse<GetProduto>>;
  postProduto(produto: string): Promise<HttpResponse<void>>;
  updateProduto(produto: string): Promise<HttpResponse<void>>;
  deleteProduto(produto: string): Promise<HttpResponse<void>>;
}
