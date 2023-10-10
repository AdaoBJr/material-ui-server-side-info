import { apiStock, AxiosHttpClient } from '../../api';
import { GetStock } from 'financiamento/frontend/types/domain';

export const useStockAPI = () => {
  const BFFClient = AxiosHttpClient(apiStock);

  const getStockData = async (product: string) => {
    return await BFFClient.request<GetStock>({ method: 'get', url: product });
  };

  return { getStockData };
};
