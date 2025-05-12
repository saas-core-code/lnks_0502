import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/libs/microcms';

export const revalidate = 60;

async function getBlogs() {
  const data = await client.getList({
    endpoint: 'blogs',
    queries: { orders: '-publishedAt' }
  });
  return data.contents;
}

export default async function BlogIndex() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ブログ記事一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <article key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
    </div>
  );
}