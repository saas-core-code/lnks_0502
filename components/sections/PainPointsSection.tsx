'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PainPointsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const troublePoints = [
    {
      src: "/images/pain-points/tr01.webp",
      alt: "課題1",
      style: {
        top: "20%",
        left: "5%",
        width: "40%",
      },
      delay: 0,
    },
    {
      src: "/images/pain-points/tr02.webp",
      alt: "課題2",
      style: {
        top: "20%",
        left: "50%",
        width: "40%",
      },
      delay: 200,
    },
    {
      src: "/images/pain-points/tr03.webp",
      alt: "課題3",
      style: {
        top: "40%",
        left: "10%",
        width: "40%",
      },
      delay: 400,
    },
    {
      src: "/images/pain-points/tr04.webp",
      alt: "課題4",
      style: {
        bottom: "25%",
        left: "50%",
        width: "40%",
      },
      delay: 600,
    },
    {
      src: "/images/pain-points/tr05.webp",
      alt: "課題5",
      style: {
        bottom: "-2%",
        left: "50%",
        width: "40%",
      },
      delay: 800,
    },
  ];

  const girlIllustration = {
    src: "/images/pain-points/girl_illust.webp",
    alt: "女の子イラスト",
    style: {
      bottom: "0%",
      right: "60%",
      width: "33%",
    },
  };

  return (
    <section className="w-full pt-2 bg-gray-100">
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-[1200px]">
          {/* 背景画像 */}
          <Image
            src="/images/pain-points/bg_trouble.webp"
            alt="背景画像"
            width={1200}
            height={800}
            className="w-full h-auto"
          />

          {/* 課題画像 */}
          {troublePoints.map((point, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ease-out`}
              style={{
                ...point.style,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${point.delay}ms`,
                animation: isVisible ? `float 3s ease-in-out infinite ${point.delay}ms` : 'none',
              }}
            >
              <div className="relative w-full" style={{ paddingTop: "100%" }}>
                <Image
                  src={point.src}
                  alt={point.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

          {/* 女の子イラスト */}
          <div
            className="absolute transition-all duration-1000 ease-out"
            style={{
              ...girlIllustration.style,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '1000ms',
            }}
          >
            <div className="relative w-full" style={{ paddingTop: "150%" }}>
              <Image
                src={girlIllustration.src}
                alt={girlIllustration.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}