/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/aistartup_landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aistartup_landing' : '',
}

module.exports = nextConfig

