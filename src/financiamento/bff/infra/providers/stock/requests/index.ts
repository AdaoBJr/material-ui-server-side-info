import { apiStock } from '../axios';
import { AxiosHttpClient } from 'financiamento/bff/core';
import { ProdutoStockProvider } from './produtoStockProvider';

const axiosClient = new AxiosHttpClient(apiStock); //qual melhor local para injeção de dependencia

//PRODUTO
const produtoStockProvider = new ProdutoStockProvider(axiosClient);

export { produtoStockProvider };
