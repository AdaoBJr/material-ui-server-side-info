import { findProdutoService } from 'bff/services';
import { FindProdutoController } from './findProdutoController';

const findProdutoController = new FindProdutoController(findProdutoService);

export { findProdutoController, FindProdutoController };
