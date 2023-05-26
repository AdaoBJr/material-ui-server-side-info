import { NextRouter } from 'next/router';

import { GetProduct } from 'types/domain';
import { apiBFF, AxiosHttpClient } from '../../api';

export const useBFFVendas = () => {
  const BFFClient = AxiosHttpClient(apiBFF);

  const getProductData = async (product: string) => {
    return await BFFClient.request<GetProduct>({
      method: 'get',
      url: `/produto/${product}`,
    });
  };

  return { getProductData };
};
