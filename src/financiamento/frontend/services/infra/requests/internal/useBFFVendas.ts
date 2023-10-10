import { NextRouter } from 'next/router';

import { apiBFF, AxiosHttpClient } from '../../api';
import { GetProduct } from 'types/domain';

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
