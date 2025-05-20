import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
  throw new Error('Required environment variables MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY are not set');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY
});

// ← これを追加！
export async function fetchContents<T>(
  endpoint: string,
  queries?: MicroCMSQueries
) {
  return await client.getList<T>({
    endpoint,
    queries
  });
}