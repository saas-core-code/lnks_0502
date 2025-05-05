"use client";

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

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

  const sections: Section[] = [
    { id: 'top',      name: 'トップ' },
    { id: 'work',     name: 'お仕事内容' },
    { id: 'earnings', name: '報酬のご説明' },
  ];

  return (
    <>
      <header
        className={
          `
          w-full 
          py-1                /* 上下 padding: 4px */
          shadow-sm 
          fixed top-0 z-50 
          transition-all duration-300 
          ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm' : ''}
        `}
        style={{ backgroundColor: '#FAF7F5' }}
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
        className={
          `
          fixed inset-0 bg-black bg-opacity-50 z-40 
          transition-opacity duration-300 
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* モバイルメニュー */}
      <nav 
        className={
          `
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 
          transform transition-transform duration-300 ease-in-out 
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-3">
          <h2 className="text-xs font-medium mb-2">セクション一覧</h2>
          <ul className="space-y-1">
            {sections.map((s) => (
              <li key={s.id} className="border-b border-gray-100">
                <a
                  href={`#${s.id}`}
                  className="block py-1 text-[10px] text-gray-800 hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}