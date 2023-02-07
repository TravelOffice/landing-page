/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const {withImageLoader} = require('next-image-loader');

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
}

module.exports = withPlugins([withImageLoader], nextConfig);
