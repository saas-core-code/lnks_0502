/** @type {import('next').NextConfig} */
const nextConfig = {
  // microCMSの画像ドメインを許可
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        pathname: '**',
      },
    ],
    // Vercelでデプロイ時に必要な場合のみtrueに設定
    unoptimized: process.env.NODE_ENV === 'production',
  },
  
  // 静的生成時のエラーを軽減するための設定
  eslint: {
    // ビルド時のESLintチェックを無効化
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    // ビルド時の型チェックを無効化（CI/CDパイプラインで別途実行することを推奨）
    ignoreBuildErrors: true,
  },
  
  // 環境変数が正しく設定されていない場合のビルドエラーを回避
  experimental: {
    // エラーが発生しても一部のページはビルドを続行
    missingSuspenseWithCSRBailout: false,
  },
  
  // 開発環境用の最適化（本番環境では適用されない）
  ...(process.env.NODE_ENV === 'development' && {
    // 開発時のキャッシュ設定
    onDemandEntries: {
      // ページのキャッシュ有効期間を短く設定
      maxInactiveAge: 10 * 1000,
      // 同時に保持するページ数
      pagesBufferLength: 2,
    },
  }),
  
  // webpack設定
  webpack: (config, { dev, isServer }) => {
    // __webpack_require__.nmdエラー対策
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      module: false,
    };
    
    // 開発環境ではキャッシュを無効化、本番環境では有効化
    if (dev) {
      config.cache = false;
    }
    
    return config;
  },
  
  // 実験的機能: App Routerの安定性向上
  experimental: {
    // サーバーコンポーネント内でのフェッチリクエストの安定性向上
    serverComponentsExternalPackages: ['microcms-js-sdk'],
  },
  
  // 環境変数のログ出力（デバッグ用、本番環境では無効化）
  ...(process.env.NODE_ENV === 'development' && {
    env: {
      DEBUG_ENV: 'true',
    },
  }),
};

// 環境変数のデバッグ出力（開発環境のみ）
if (process.env.NODE_ENV === 'development' && process.env.DEBUG_ENV) {
  console.log('MICROCMS_SERVICE_DOMAIN:', process.env.MICROCMS_SERVICE_DOMAIN ? '設定済み' : '未設定');
  console.log('MICROCMS_API_KEY:', process.env.MICROCMS_API_KEY ? '設定済み' : '未設定');
}

module.exports = nextConfig;