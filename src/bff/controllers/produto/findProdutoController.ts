import { NextApiRequest, NextApiResponse } from 'next';

import { ApiError } from 'bff/core';
import { FindProdutoService } from 'bff/services';
import { GetProdutoIdResult } from 'bff/types/response';

class FindProdutoController {
  constructor(private findProdutoService: FindProdutoService) {}

  async handler(
    req: NextApiRequest,
    res: NextApiResponse<GetProdutoIdResult | ApiError>
  ) {
    try {
      const { query } = req;
      const produto = query.id as string;

      const response = await this.findProdutoService.execute({ produto });

      res.status(response.status).json(response.data);
    } catch (e) {
      if (e instanceof ApiError) {
        res.status(e.status).send(e);
      } else {
        throw new Error(`Unexpected error: Get Produto`);
      }
    }
  }
}

export { FindProdutoController };
