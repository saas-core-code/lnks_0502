import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries, MicroCMSListResponse } from 'microcms-js-sdk';

// 開発環境では厳格にチェック、本番環境ではフォールバック
const isDevelopment = process.env.NODE_ENV === 'development';

// 環境変数の取得と検証
const getEnvVar = (name: string, fallback?: string): string => {
  const value = process.env[name] || fallback;
  if (!value && isDevelopment) {
    throw new Error(`${name} is required`);
  }
  return value || '';
};

// API Key と Service Domain の取得
const apiKey = getEnvVar('MICROCMS_API_KEY', process.env.NEXT_PUBLIC_MICROCMS_API_KEY);
const serviceDomain = getEnvVar('MICROCMS_SERVICE_DOMAIN', process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN);

// microCMSクライアント生成（シンプルな設定）
export const client = createClient({
  serviceDomain,
  apiKey,
});

// ブログ型定義（実データに合わせてオプショナル調整）
export type Blog = {
  id: string;
  title: string;
  content?: string; // オプショナル
  eyecatch?: {
    url: string;
    height?: number; // オプショナル
    width?: number;  // オプショナル
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt?: string; // オプショナル
};

// ジェネリック型を使用した汎用フェッチ関数
export async function fetchContents<T>(
  endpoint: string,
  queries?: MicroCMSQueries
): Promise<MicroCMSListResponse<T>> {
  try {
    const data = await client.getList<T>({
      endpoint,
      queries,
    });
    return data;
  } catch (error) {
    // 開発環境ではエラーを投げる
    if (isDevelopment) {
      console.error(`Error fetching from microCMS (${endpoint}):`, error);
      throw error;
    }
    // 本番環境では空のレスポンスを返す
    console.error(`Failed to fetch ${endpoint}:`, error);
    return { contents: [], totalCount: 0, offset: 0, limit: 0 };
  }
}

// 単一コンテンツ取得用のジェネリック関数
export async function fetchContent<T>(
  endpoint: string,
  contentId: string,
  queries?: MicroCMSQueries
): Promise<T | null> {
  try {
    return await client.getListDetail<T>({
      endpoint,
      contentId,
      queries,
    });
  } catch (error) {
    // 開発環境ではエラーを投げる
    if (isDevelopment) {
      console.error(`Error fetching content (${endpoint}/${contentId}):`, error);
      throw error;
    }
    // 本番環境ではnullを返す
    console.error(`Failed to fetch ${endpoint}/${contentId}:`, error);
    return null;
  }
}