"use client";

import { Blog } from '@/libs/microcms';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles, Clock, ChevronRight } from 'lucide-react';

type Props = {
  blogs: Blog[];
};

export default function BlogSummarySection({ blogs }: Props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  };

  return (
    <section className="w-full flex justify-center bg-[#F86F62] py-16">
      <div className="w-full max-w-[960px] px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          <span className="relative inline-block">
            新着ブログ
            <motion.span
              className="absolute -right-8 -top-6 text-white"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={24} />
            </motion.span>
          </span>
        </motion.h2>

        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link 
                href={`/blog/${blog.id}`}
                className="block group"
              >
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {blog.eyecatch && (
                    <div className="relative w-full sm:w-48 h-48 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#F86F62]/30 to-transparent z-10" />
                      <Image
                        src={blog.eyecatch.url}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  )}
                  
                  <div className="flex-1 relative">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={14} className="text-[#F86F62]" />
                      <time className="text-sm text-[#F86F62] font-medium">
                        {formatDate(blog.publishedAt)}
                      </time>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-[#F86F62] group-hover:opacity-80 transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <div className="prose prose-sm text-gray-600 line-clamp-2 mb-4">
                      {blog.content?.replace(/<[^>]*>/g, '').substring(0, 100)}...
                    </div>
                    
                    <div className="flex items-center text-[#F86F62] text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      続きを読む
                      <ChevronRight size={16} className="ml-1" />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-gradient-to-tr from-[#F86F62]/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                  </div>
                </motion.div>
              </Link>
              
              {index < blogs.length - 1 && (
                <div className="border-b border-dotted border-white/30 mt-6" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}