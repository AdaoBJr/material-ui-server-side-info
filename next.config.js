const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const dependencies = require('./package.json').dependencies;

const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
  async headers() {
    return [
      {
        // matching all API routes
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
          },
        ],
      },
    ];
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'info',
        remotes: {},
        exposes: {
          './ProductInfo':
            './src/financiamento/frontend/microfrontend/modules/ProductInfo',
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          '@emotion/react': {
            eager: true,
            requiredVersion: dependencies['@emotion/react'],
            singleton: true,
          },
          '@emotion/server': {
            eager: true,
            requiredVersion: dependencies['@emotion/server'],
            singleton: true,
          },
          '@emotion/styled': {
            eager: true,
            requiredVersion: dependencies['@emotion/styled'],
            singleton: true,
          },
          '@mui/material': {
            requiredVersion: dependencies['@mui/material'],
            singleton: true,
            eager: true,
          },
          '@mui/icons-material': {
            requiredVersion: dependencies['@mui/icons-material'],
            singleton: true,
            eager: true,
          },
          '@mui/lab': {
            requiredVersion: dependencies['@mui/lab'],
            singleton: true,
            eager: true,
          },
          '@mui/styles': {
            requiredVersion: dependencies['@mui/styles'],
            singleton: true,
            eager: true,
          },
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
