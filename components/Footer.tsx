'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const menuItems = [
    { label: 'トップ', href: '/' },
    { label: 'お仕事内容', href: '#work' },
    { label: '報酬のご説明', href: '#earnings' },
    { label: '女の子の声', href: '#voices' },
    { label: '店内環境', href: '#environment' },
    { label: 'スタッフ紹介', href: '#staff' },
    { label: 'よくある質問', href: '#faq' },
    { label: '会社概要', href: '#company' }
  ];
  
  return (
    <footer className="w-full bg-gradient-to-b from-white to-pink-50 mt-auto pt-[20px] pb-[150px] text-gray-900">
      <div className="container mx-auto px-4">
        {/* メニュー: グラデーションボーダーとホバーエフェクト */}
        <div className="bg-white rounded-2xl shadow-lg p-[1px] overflow-hidden" style={{
          background: 'linear-gradient(45deg, #ffd1dc, #ffb6c1, #ffd1dc)'
        }}>
          <nav className="bg-white rounded-2xl grid grid-cols-2 grid-rows-4">
            {menuItems.map((item, idx) => {
              const isRightColumn = idx % 2 === 1;
              
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  whileHover={{ scale: 0.98 }}
                  className={`
                    flex items-center justify-center py-4 relative
                    hover:text-pink-500 transition-all duration-200
                    ${isRightColumn ? 'border-l border-pink-100' : ''}
                    ${idx >= 2 ? 'border-t border-pink-100' : ''}
                    hover:bg-gradient-to-r hover:from-pink-50 hover:to-transparent
                  `}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </nav>
        </div>
        
        {/* コピーライト */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">© Live-Links. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}