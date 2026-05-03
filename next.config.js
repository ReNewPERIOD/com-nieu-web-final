/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-comnieudanhtien.pantheonsite.io',
      },
    ],
  },
};

module.exports = nextConfig;
