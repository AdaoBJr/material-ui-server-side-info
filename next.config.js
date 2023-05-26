const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
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
