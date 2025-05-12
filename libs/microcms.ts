import { createClient } from 'microcms-js-sdk';

// エラーチェック（環境変数の設定確認）
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

// microCMSクライアント生成
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

// ブログ型定義（microCMSの構造に合わせて）
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};