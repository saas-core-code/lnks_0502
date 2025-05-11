"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// オーバーレイ画像の型定義
type OverlayImage = {
  src: string;
  alt: string;
  x: number;
  y: number;
  width: number;
  height: number;
  delay: number;
  rotation: number;
};

export default function ChoiceReasonsSection() {
  const bgWidth = 800;
  const bgHeight = 1200;

  // オーバーレイ画像リスト
  const overlayImages: OverlayImage[] = [
    { src: "/images/choice-reasons/ChoiceReasonsSection_ho.png", alt: "理由1", x: 75, y: 550, width: 160, height: 160, delay: 0, rotation: -5 },
    { src: "/images/choice-reasons/ChoiceReasonsSection_sh.png", alt: "理由2", x: 205, y: 550, width: 160, height: 160, delay: 0.2, rotation: 5 },
    { src: "/images/choice-reasons/ChoiceReasonsSection_zy.png", alt: "理由3", x: 140, y: 430, width: 160, height: 160, delay: 0.4, rotation: -3 },
  ];

  // パーセンテージ計算
  const overlays = overlayImages.map((o) => ({
    ...o,
    leftPct: (o.x / bgWidth) * 100,
    topPct: (o.y / bgHeight) * 100,
    widthPct: (o.width / bgWidth) * 100,
    heightPct: (o.height / bgHeight) * 100,
  }));

  // 背景のバリアント
  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // オーバーレイのバリアント
  const overlayVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      scale: 0.5,
      x: i % 2 === 0 ? -100 : 100,
      rotate: i % 2 === 0 ? -45 : 45
    }),
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.2,
        duration: 0.8
      }
    }),
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
        rotate: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }
    }
  };

  return (
    <section className="w-full bg-white flex justify-center overflow-hidden">
      <div className="w-full max-w-[960px] relative">
        {/* 背景画像 */}
        <motion.div
          variants={backgroundVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full"
          style={{ paddingBottom: `${(bgHeight / bgWidth) * 100}%` }}
        >
          <Image
            src="/images/choice-reasons/ChoiceReasonsSection.png"
            alt="選ばれる理由 背景"
            fill
            className="object-contain"
            sizes="(max-width: 960px) 100vw, 960px"
            priority
          />
          
          {/* キラキラエフェクト */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>

        {/* オーバーレイ画像 */}
        <div className="absolute inset-0">
          {overlays.map((o, i) => (
            <motion.div
              key={o.src}
              className="absolute"
              style={{
                left: `${o.leftPct}%`,
                top: `${o.topPct}%`,
                width: `${o.widthPct}%`,
                height: `${o.heightPct}%`,
              }}
              custom={i}
              variants={overlayVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <motion.div
                className="w-full h-full relative"
                animate={{
                  y: [0, -10, 0],
                  filter: ["drop-shadow(0 5px 15px rgba(0,0,0,0.2))", "drop-shadow(0 15px 25px rgba(0,0,0,0.3))", "drop-shadow(0 5px 15px rgba(0,0,0,0.2))"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              >
                <Image
                  src={o.src}
                  alt={o.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 960px) 100vw, 960px"
                  style={{
                    filter: "drop-shadow(0 5px 15px rgba(0,0,0,0.2))"
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}