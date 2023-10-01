const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */

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
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'info',
        remotes: {},
        exposes: {
          './ProductInfo': './src/microfrontend/modules/ProductInfo',
        },
        filename: 'static/chunks/remoteEntry.js',
      })
    );
    return config;
  },
};

module.exports = nextConfig;
