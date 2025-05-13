'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/libs/microcms';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

type Props = {
  blog: Blog;
};

export default function BlogDetailClient({ blog }: Props) {
  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 pt-20 pb-8"
      >
        <Link 
          href="/blog"
          className="inline-block mb-8 text-gray-600 hover:text-blue-600 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          {blog.title}
        </motion.h1>
        
        <time className="text-gray-500 block mb-8">
          {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
        </time>
        
        {blog.eyecatch && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={blog.eyecatch.url}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </motion.div>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </motion.article>

      {/* Fixed Button */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1 }}
        className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4"
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gradient-to-r from-[#ffc4a3] to-[#ffb391] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-bold">無料カウンセリングに申し込む</span>
        </motion.a>
      </motion.div>
    </>
  );
}
