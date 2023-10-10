import { apiBFF, AxiosHttpClient } from '../../api';
import { GetProduct } from 'financiamento/frontend/types/domain';

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
