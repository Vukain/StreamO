/** @type {import('next').NextConfig} */
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

module.exports = nextConfig
