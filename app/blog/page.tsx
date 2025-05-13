// app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { fetchContents, Blog } from '@/libs/microcms';

// ISRの設定（60秒ごとに再検証）
export const revalidate = 60;
// 動的ルートパラメータの有効化
export const dynamicParams = true;

export default async function BlogIndex() {
  // データ取得時のエラーハンドリングを追加
  try {
    // ジェネリック型パラメータでBlog型を指定
    const { contents: blogs } = await fetchContents<Blog>('blogs', { 
      orders: '-publishedAt' 
    });
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">ブログ記事一覧</h1>
        
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/${blog.id}`}>
                  {blog.eyecatch && (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={blog.eyecatch.url}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h2>
                    <time className="text-sm text-gray-500">
                      {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
                    </time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">記事が見つかりませんでした。</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    // エラー発生時の表示
    console.error('ブログ記事の取得に失敗しました:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">ブログ記事一覧</h1>
        <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
          <p className="text-red-600">
            データの読み込み中にエラーが発生しました。しばらく経ってから再度お試しください。
          </p>
        </div>
      </div>
    );
  }
}