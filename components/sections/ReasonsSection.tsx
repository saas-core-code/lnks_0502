"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReasonsSection() {
  const reasonsData = [
    {
      src: "/images/reasons/ReasonsSection_1.webp",
      alt: "メリット1の画像",
      title: "特徴1のタイトル"
    },
    {
      src: "/images/reasons/ReasonsSection_2.webp",
      alt: "メリット2の画像",
      title: "特徴2のタイトル"
    },
    {
      src: "/images/reasons/ReasonsSection_3.webp",
      alt: "メリット3の画像",
      title: "特徴3のタイトル"
    },
    {
      src: "/images/reasons/ReasonsSection_4.webp",
      alt: "メリット4の画像",
      title: "特徴4のタイトル"
    },
    {
      src: "/images/reasons/ReasonsSection_5.webp",
      alt: "メリット5の画像",
      title: "特徴5のタイトル"
    },
    {
      src: "/images/reasons/ReasonsSection_6.webp",
      alt: "メリット6の画像",
      title: "特徴6のタイトル"
    },
    {
      src: "/images/reasons/ReasonsSection_7.webp",
      alt: "メリット7の画像",
      title: "特徴7のタイトル"
    },
    {
      src: "/images/reasons/ReasonsSection_8.webp",
      alt: "メリット8の画像",
      title: "特徴8のタイトル"
    },
  ];
  
  return (
    <section 
      className="w-full pt-16 pb-10 overflow-hidden relative" 
      aria-labelledby="reasons-section-title"
      style={{
        backgroundImage: "url('/images/reasons/ReasonsSection_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-2 max-w-full relative z-10">
        <motion.h2 
          id="reasons-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-16"
        >
          メリット８
        </motion.h2>
        
        <div className="grid grid-cols-2 auto-rows-max gap-4 md:gap-8 mb-4">
          {reasonsData.map((item, index) => (
            <motion.article
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                rotateY: index % 2 === 0 ? -10 : 10
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                rotateY: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="relative w-full"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: '100%' }}>
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": reasonsData.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "ImageObject",
                "contentUrl": item.src,
                "name": item.title,
                "description": item.alt
              }
            }))
          })
        }}
      />
    </section>
  );
}