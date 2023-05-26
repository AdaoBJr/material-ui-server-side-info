const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: 'info',
        remotes: {},
        exposes: {
          './ProductInfo': './src/microfrontend/modules/ProductInfo',
        },
        filename: 'static/chunks/primaryEntry.js',
      })
    );
    return config;
  },
};

module.exports = nextConfig;
