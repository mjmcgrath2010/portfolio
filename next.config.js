/** @type {import('next').NextConfig} */

const webpackConfig = {
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URL: process.env.DB_URL,
  },
  ...webpackConfig,
};

module.exports = nextConfig;
