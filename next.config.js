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
}

module.exports = withSvgr(nextConfig);