"use client";
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  name: string;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // フッターのリンクとIDを合わせる
  const sections: Section[] = [
    { id: 'top',     name: 'トップ' },
    { id: 'about',   name: 'お仕事内容' },
    { id: 'rewards', name: '報酬のご説明' },
    { id: 'voices',  name: '女の子の声' },
    { id: 'studio',  name: '店内環境' },
    { id: 'staff',   name: 'スタッフ紹介' },
    { id: 'faq',     name: 'よくある質問' },
    { id: 'company', name: '会社概要' },
  ];

  return (
    <>
      <header
        className={`
          w-full 
          py-1
          shadow-sm 
          fixed top-0 z-50 
          transition-all duration-300 
          bg-white
          ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm' : ''}
        `}
      >
        <div className="container mx-auto px-2 flex justify-between items-center h-8">
          <div className="font-serif italic font-bold tracking-wide leading-none" style={{ color: '#B3927A' }}>
            Live-Links
          </div>
          <button 
            className="p-1 leading-none" 
            aria-label="メニュー"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={16}/> : <Menu size={16}/>}
          </button>
        </div>
      </header>

      {/* モバイルオーバーレイ */}
      <div 
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-40 
          transition-opacity duration-300 
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* モバイルメニュー - 1列に変更 */}
      <nav 
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 
          transform transition-transform duration-300 ease-in-out 
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          overflow-y-auto
        `}
      >
        <div className="p-4">
          <h2 className="text-xs font-medium mb-3 text-gray-700">セクション一覧</h2>
          
          {/* フッターのスタイルを継承しつつ、1列に変更 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-[1px] overflow-hidden" style={{
            background: 'linear-gradient(45deg, #ffd1dc, #ffb6c1, #ffd1dc)'
          }}>
            <div className="bg-white/95 rounded-2xl flex flex-col">
              {sections.map((s, idx) => (
                <motion.a
                  key={s.id}
                  href={`#${s.id}`}
                  whileHover={{ scale: 0.98 }}
                  className={`
                    flex items-center justify-center py-3 text-sm text-gray-800
                    hover:text-pink-500 transition-all duration-200
                    ${idx > 0 ? 'border-t border-pink-100' : ''}
                    hover:bg-gradient-to-r hover:from-pink-50 hover:to-transparent
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {s.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}