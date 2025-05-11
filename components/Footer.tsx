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
    <footer 
      className="w-full mt-0 pb-[80px] text-gray-900 relative" // mt-[20px] を mt-0 に変更
      style={{
        backgroundImage: "url('/images/application-flow/ApplicationFlowSection.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top', // center から center top に変更して上部を重視
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 背景画像の上に薄いオーバーレイを追加（任意） */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-4 max-w-[960px] relative z-10 pt-[40px]">
        {/* メニュー: グラデーションボーダーとホバーエフェクト */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-[1px] overflow-hidden" style={{
          background: 'linear-gradient(45deg, #ffd1dc, #ffb6c1, #ffd1dc)'
        }}>
          <nav className="bg-white/95 rounded-2xl grid grid-cols-2 grid-rows-4">
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
        <div className="mt-6 text-center pb-4">
          <p className="text-sm text-gray-600 bg-white/70 backdrop-blur-sm inline-block px-4 py-2 rounded-lg">© Live-Links. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}