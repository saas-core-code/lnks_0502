"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

export default function RoomGallerySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const galleryItems = [
    { src: "/images/room-gallery/carousel/workScene__img_top4.webp", alt: "ワークスペース - デスクエリア", width: 224, height: 144 },
    { src: "/images/room-gallery/carousel/workScene__img_top6.webp", alt: "ワークスペース - ミーティングエリア", width: 224, height: 144 },
    { src: "/images/room-gallery/carousel/workScene__img_bottom3.webp", alt: "ワークスペース - 休憩スペース", width: 224, height: 144 },
    { src: "/images/room-gallery/carousel/workScene__img_bottom4.webp", alt: "ワークスペース - 共同作業エリア", width: 224, height: 144 },
    { src: "/images/room-gallery/carousel/workScene__img_bottom5.webp", alt: "ワークスペース - カフェスペース", width: 224, height: 144 },
    { src: "/images/room-gallery/carousel/workScene__img_bottom6.webp", alt: "ワークスペース - プライベートブース", width: 224, height: 144 }
  ];

  return (
    <section
      id="room-gallery"
      aria-labelledby="room-gallery-title"
      className="w-full flex justify-center pt-[30px] relative overflow-hidden"
    >
      {/* 背景用のコンテナ - 幅を制限し中央に配置 */}
      <div 
        className="absolute w-full max-w-[960px] h-full top-0"
        style={{
          backgroundColor: '#F5ADBC',
          backgroundImage: 'radial-gradient(circle, rgba(139, 69, 19, 0.08) 1px, transparent 1px)',
          backgroundSize: '6px 6px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[960px] mx-auto flex flex-col items-center relative z-10">
        <h2 id="room-gallery-title" className="sr-only">快適な作業環境ギャラリー</h2>

        <div
          className="w-[80%] transition-all duration-[1500ms] ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? 'scale(1) perspective(1000px) rotateX(0deg)'
              : 'scale(0.6) perspective(1000px) rotateX(-15deg)',
            transformOrigin: 'center center',
            filter: isVisible
              ? 'drop-shadow(0 25px 25px rgba(0,0,0,0.15))'
              : 'drop-shadow(0 0 0 rgba(0,0,0,0))'
          }}
        >
          <figure>
            <Image
              src="/images/room-gallery/WorkEnvironment.webp"
              alt="充実した作業環境と快適な空間設計"
              width={1920}
              height={1080}
              className="w-full mb-8 rounded-xl"
              priority
              loading="eager"
            />
          </figure>
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isVisible
              ? 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)'
              : 'none',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1.5s ease-out'
          }}
          aria-hidden="true"
        />

        <div className="w-full overflow-hidden mb-8" aria-label="作業スペースギャラリー - 左から右へのスクロール">
          <Marquee gradient={false} speed={50} pauseOnHover direction="left">
            {galleryItems.map((item, i) => (
              <div key={`left-${i}`} className="mx-2">
                <div className="w-48 h-32 md:w-56 md:h-36 rounded-2xl overflow-hidden border-[6px] border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="w-full overflow-hidden mb-8" aria-label="作業スペースギャラリー - 右から左へのスクロール">
          <Marquee gradient={false} speed={50} pauseOnHover direction="right">
            {galleryItems.map((item, i) => (
              <div key={`right-${i}`} className="mx-2">
                <div className="w-48 h-32 md:w-56 md:h-36 rounded-2xl overflow-hidden border-[6px] border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}