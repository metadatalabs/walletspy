/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  basePath: '/docs',
}

module.exports = nextConfig
