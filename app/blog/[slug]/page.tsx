import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/libs/microcms';
import BlogDetailClient from './BlogDetailClient';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlog(params.slug);
  
  if (!blog) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.'
    };
  }

  return {
    title: blog.title,
    description: blog.content.substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.content.substring(0, 160),
      images: blog.eyecatch ? [blog.eyecatch.url] : [],
    },
  };
}

async function getBlog(slug: string) {
  try {
    const blog = await client.get({
      endpoint: 'blogs',
      contentId: slug,
    });
    return blog;
  } catch (error) {
    return null;
  }
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetailClient blog={blog} />;
}