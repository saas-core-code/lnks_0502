"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function ReasonsSection() {
  const reasonsData = [
    { src: "/images/reasons/ReasonsSection_1.webp", alt: "メリット1の画像", title: "特徴1のタイトル" },
    { src: "/images/reasons/ReasonsSection_2.webp", alt: "メリット2の画像", title: "特徴2のタイトル" },
    { src: "/images/reasons/ReasonsSection_3.webp", alt: "メリット3の画像", title: "特徴3のタイトル" },
    { src: "/images/reasons/ReasonsSection_4.webp", alt: "メリット4の画像", title: "特徴4のタイトル" },
    { src: "/images/reasons/ReasonsSection_5.webp", alt: "メリット5の画像", title: "特徴5のタイトル" },
    { src: "/images/reasons/ReasonsSection_6.webp", alt: "メリット6の画像", title: "特徴6のタイトル" },
    { src: "/images/reasons/ReasonsSection_7.webp", alt: "メリット7の画像", title: "特徴7のタイトル" },
    { src: "/images/reasons/ReasonsSection_8.webp", alt: "メリット8の画像", title: "特徴8のタイトル" }
  ];
  
  // Ensure absolute URLs for JSON-LD
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": reasonsData.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "ImageObject",
        "contentUrl": `${baseUrl}${item.src}`,
        "name": item.title,
        "description": item.alt
      }
    }))
  };

  return (
    <div className="flex justify-center w-full bg-white">
      <section
        id="staff"
        className="w-full max-w-[960px] pt-8 pb-16 overflow-hidden relative mx-auto"
        aria-labelledby="reasons-section-title"
        style={{
          backgroundImage: "url('/images/reasons/ReasonsSection_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Container for content */}
        <div className="w-full px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center mb-8"
          >
            <motion.div 
              className="w-[75%] max-w-[800px] relative group"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ 
                scale: [0.95, 1.02, 0.98],
                y: [-10, 10, -5],
                rotate: [-2, 2, -1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              {/* Sparkle effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-pink-100 via-yellow-100 to-pink-100 opacity-30 blur-xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
              />

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                style={{ border: "2px solid rgba(255, 255, 255, 0.3)" }}
              />

              {/* Main header image */}
              <motion.div className="relative" whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}>
                <Image
                  src="/images/reasons/reason.png"
                  alt="メリット8のヘッダー画像"
                  width={1200}
                  height={300}
                  className="w-full h-auto relative z-10"
                  priority
                  style={{ filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.15))" }}
                />

                {/* Dynamic light effect */}
                <motion.div
                  className="absolute inset-0 z-20"
                  animate={{ background: [
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)"
                  ]}}
                  transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 auto-rows-max gap-6 md:gap-8 px-2 md:px-4 mb-8">
            {reasonsData.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="relative w-full"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg h-full">
                  <div className="transition-transform duration-300 hover:scale-105">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  </div>
                  <h3 className="sr-only">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
        />
      </section>
    </div>
  );
}