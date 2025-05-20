/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        pathname: '**',
      },
    ],
    // Disable image optimization to prevent processing errors
    unoptimized: true,
  },
  
  // Static generation error reduction settings
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  experimental: {
    missingSuspenseWithCSRBailout: false,
    // Server components stability improvement
    serverComponentsExternalPackages: ['microcms-js-sdk'],
  },
  
  // Development environment optimization
  ...(process.env.NODE_ENV === 'development' && {
    onDemandEntries: {
      maxInactiveAge: 10 * 1000,
      pagesBufferLength: 2,
    },
  }),
  
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      module: false,
    };
    
    if (dev) {
      config.cache = false;
    }
    
    return config;
  },
};

// Debug logging for development
if (process.env.NODE_ENV === 'development' && process.env.DEBUG_ENV) {
  console.log('MICROCMS_SERVICE_DOMAIN:', process.env.MICROCMS_SERVICE_DOMAIN ? '設定済み' : '未設定');
  console.log('MICROCMS_API_KEY:', process.env.MICROCMS_API_KEY ? '設定済み' : '未設定');
}

module.exports = nextConfig;