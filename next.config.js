/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.licdn.com", "localhost", "licdn.com"],
  },
};

module.exports = nextConfig;
