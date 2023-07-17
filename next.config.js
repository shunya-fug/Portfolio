/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1500,
      aggregateTimeout: 300,
    };
    return config;
  },
};

module.exports = nextConfig;
