// app/blog/page.tsx
import { fetchContents, Blog } from '@/libs/microcms';

export const revalidate = 60;
export const dynamicParams = true;

export default async function BlogIndex() {
  // ジェネリック型パラメータでBlog型を指定
  const { contents: blogs } = await fetchContents<Blog>('blogs', { 
    orders: '-publishedAt' 
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ブログ記事一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            // 既存のコード
          ))
        ) : (
          <p>記事が見つかりませんでした。</p>
        )}
      </div>
    </div>
  );
}