// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,  // Required for static export; disables Next.js image optimization
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',  // Set dynamically via env in GitHub Actions
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',  // Ensures assets (CSS/JS/images) load from base path
};

module.exports = nextConfig;