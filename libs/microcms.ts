import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries, MicroCMSListResponse, MicroCMSContentResponse } from 'microcms-js-sdk';

// 開発/本番環境の判定
const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * 環境変数を安全に取得する関数
 */
const getEnvVar = (name: string, fallback?: string): string => {
  const value = process.env[name] || fallback;
  if (!value && isDevelopment) {
    throw new Error(`環境変数 ${name} が設定されていません`);
  }
  return value || '';
};

// API接続情報の取得
const apiKey = getEnvVar('MICROCMS_API_KEY', process.env.NEXT_PUBLIC_MICROCMS_API_KEY);
const serviceDomain = getEnvVar('MICROCMS_SERVICE_DOMAIN', process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN);

// API接続クライアントの初期化
export const client = createClient({
  serviceDomain,
  apiKey,
});

/**
 * ブログコンテンツの型定義
 */
export type Blog = {
  id: string;
  title: string;
  content?: string;
  eyecatch?: {
    url: string;
    height?: number;
    width?: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt?: string;
  category?: {
    id: string;
    name: string;
  };
  tags?: {
    id: string;
    name: string;
  }[];
};

/**
 * コンテンツ一覧を取得する汎用関数
 */
export async function fetchContents<T>(
  endpoint: string,
  queries?: MicroCMSQueries
): Promise<MicroCMSListResponse<T>> {
  if (!apiKey || !serviceDomain) {
    console.warn('microCMS接続情報が不足しています');
    return { contents: [], totalCount: 0, offset: 0, limit: 0 };
  }

  try {
    const data = await client.getList<T>({
      endpoint,
      queries: {
        ...queries,
        limit: queries?.limit || 10,
      },
    });
    return data;
  } catch (error) {
    if (isDevelopment) {
      console.error(`microCMSからのデータ取得エラー (${endpoint}):`, error);
      throw error;
    }
    
    console.error(`${endpoint}の取得に失敗:`, error);
    return { contents: [], totalCount: 0, offset: 0, limit: 0 };
  }
}

/**
 * 単一コンテンツを取得する汎用関数
 */
export async function fetchContent<T>(
  endpoint: string,
  contentId: string,
  queries?: MicroCMSQueries
): Promise<T | null> {
  if (!apiKey || !serviceDomain) {
    console.warn('microCMS接続情報が不足しています');
    return null;
  }

  try {
    return await client.getListDetail<T>({
      endpoint,
      contentId,
      queries,
    });
  } catch (error) {
    if (isDevelopment) {
      console.error(`単一コンテンツ取得エラー (${endpoint}/${contentId}):`, error);
      throw error;
    }
    
    console.error(`${endpoint}/${contentId}の取得に失敗:`, error);
    return null;
  }
}

/**
 * ブログ一覧を取得するラッパー関数
 */
export async function getBlogs(queries?: MicroCMSQueries) {
  return fetchContents<Blog>('blogs', queries);
}

/**
 * 単一ブログ記事を取得するラッパー関数
 */
export async function getBlog(contentId: string, queries?: MicroCMSQueries) {
  return fetchContent<Blog>('blogs', contentId, queries);
}