"use client";

import { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsVisible(y <= lastScrollY.current);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ニュースティッカー */}
      <div
        aria-label="お知らせ"
        role="banner"
        className={`
          fixed top-[32px] inset-x-0
          bg-black/50
          z-40
          transition-transform duration-300
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="w-full max-w-[960px] mx-auto">
          <Marquee speed={50} gradient={false} pauseOnHover={false}>
            <span className="text-white text-[10px] px-2 whitespace-nowrap">
              ようこそ！最高のサービスと快適な環境をご提供いたします。
            </span>
          </Marquee>
        </div>
      </div>

      {/* メインビジュアル（ヒーロー動画） */}
      <section
        id="top"
        className="w-full pt-[60px] relative overflow-hidden" // pt-[40px]から[60px]に変更
        aria-label="メインビジュアル"
      >
        <div className="w-full max-w-[960px] mx-auto">
          <h1 className="sr-only">ウェルカムページ</h1>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
            aria-describedby="hero-video-description"
          >
            <source src="/videos/hero_427.webm" type="video/webm" />
            <source src="/videos/hero_427.mp4" type="video/mp4" />
            <p id="hero-video-description">
              お使いのブラウザは HTML5 ビデオに対応していません。
            </p>
          </video>
        </div>
      </section>
    </>
  );
}
