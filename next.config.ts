/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? '/lootmart' : '',
  assetPrefix: isGithubPages ? '/lootmart/' : '',
}

module.exports = nextConfig