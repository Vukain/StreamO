/** @type {import('next').NextConfig} */

const withSvgr = require('next-plugin-svgr');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/streamers',
        permanent: true,
      },
    ];
  },
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['mongoose'],
  },
  // webpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true
  //   };
  //   return config;
  // },
};

module.exports = withSvgr(nextConfig);
