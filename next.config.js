/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fastly.picsum.photos"],
  },
};

module.exports = nextConfig;
