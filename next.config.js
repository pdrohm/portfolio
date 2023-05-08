/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.licdn.com", "localhost", "licdn.com"],
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
