/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.microcms-assets.io'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable filesystem cache
  generateBuildId: async () => 'build',
  onDemandEntries: {
    // Disable page caching
    maxInactiveAge: 0
  },
  webpack: (config, { isServer }) => {
    // Disable webpack cache
    config.cache = false;
    
    // Fix for __webpack_require__.nmd error
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      module: false,
    };
    return config;
  },
};

module.exports = nextConfig;