import { HttpClient, HttpResponse, apiErrorHandler } from 'bff/core';
import { GetProduto, StockProvider } from '../types';

class ProdutoStockProvider implements StockProvider {
  constructor(private httpClient: HttpClient) {}

  async getProdutoId(produto: string): Promise<HttpResponse<GetProduto>> {
    return await this.httpClient
      .request<GetProduto>({ method: 'get', url: produto })
      .catch((response) => {
        throw apiErrorHandler(response.statusCode);
      });
  }
  async postProduto(produto: string): Promise<HttpResponse<void>> {
    return await this.httpClient
      .request<void>({ method: 'post', url: produto })
      .catch((response) => {
        throw apiErrorHandler(response.statusCode);
      });
  }
  async updateProduto(produto: string): Promise<HttpResponse<void>> {
    return await this.httpClient
      .request<void>({ method: 'put', url: produto })
      .catch((response) => {
        throw apiErrorHandler(response.statusCode);
      });
  }
  async deleteProduto(produto: string): Promise<HttpResponse<void>> {
    return await this.httpClient
      .request<void>({ method: 'delete', url: produto })
      .catch((response) => {
        throw apiErrorHandler(response.statusCode);
      });
  }
}

export { ProdutoStockProvider };
