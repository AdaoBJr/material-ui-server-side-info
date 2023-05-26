interface Stock {
  id: string;
  title: string;
  address: string;
  attributes: string[];
  available_quantity: number;
  buying_mode: string;
  catalog_listing: boolean;
  catalog_product_id: string;
  category_id: string;
  condition: string;
  currency_id: string;
  discounts: boolean | null;
  price: number;
  thumbnail: string;
}

export interface GetStock {
  results: Stock[];
}
