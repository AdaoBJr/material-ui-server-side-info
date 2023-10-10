import { NextApiRequest, NextApiResponse } from 'next';

import { ApiError } from 'financiamento/bff/core';
import { HttpStatusCode } from 'financiamento/bff/core';
import { GetProdutoIdResult } from 'financiamento/bff/types/response';
import { findProdutoController } from 'financiamento/bff/controllers';

/**
 * @swagger
 * /api/produto/{id}:
 *   get:
 *     description: Será
 *     parameters: [
 *      {
 *        name: id,
 *        in: path,
 *        required: true,
 *        type: string
 *      }
 *     ]
 *     responses:
 *       200:
 *         description: produto world
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await requestHandler(req, res);
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.status).send(error);
    } else {
      throw new Error(`Unexpected error: Get Pagamentos`);
    }
  }
}

async function requestHandler(
  req: NextApiRequest,
  res: NextApiResponse<GetProdutoIdResult | void | ApiError>
) {
  switch (req.method) {
    case 'GET':
      return findProdutoController.handler(req, res); //função vinda do controller
    default:
      return HttpStatusCode.methodNotAllowed;
  }
}
