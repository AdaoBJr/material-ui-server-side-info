import { produtoStockProvider } from 'financiamento/bff/infra';
import { FindProdutoService } from './findProdutoService';

const findProdutoService = new FindProdutoService(produtoStockProvider);

export { findProdutoService, FindProdutoService };
