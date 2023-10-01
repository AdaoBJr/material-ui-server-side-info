type ServerEnv = 'local' | 'dev' | 'tst' | 'prd';
export interface Environment {
  SERVER_ENV: ServerEnv;
  URL_ESTOQUE: string;
  URL_BFF: string;
}

const ENV = {
  SERVER_ENV: 'prd' as ServerEnv,
  URL_BFF: 'http://localhost:3001/api/',
  URL_ESTOQUE: 'https://api.mercadolibre.com/sites/MLB/search?category=categoryId&q=',
};

/*istanbul ignore next*/
export const environment: Environment = {
  ...ENV,
};
/*istanbul ignore next*/
export const getEnv = (env = process.env.NODE_ENV): Environment => {
  return env === 'production'
    ? environment
    : {
        SERVER_ENV: 'local',
        URL_BFF: 'http://localhost:3001/api/',
        URL_ESTOQUE:
          'https://api.mercadolibre.com/sites/MLB/search?category=categoryId&q=',
      };
};
