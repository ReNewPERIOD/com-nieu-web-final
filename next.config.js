/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-comnieudanhtien.pantheonsite.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
