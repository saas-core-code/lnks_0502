"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SolutionSection() {
  const overlayImages = [
    {
      src: "/images/SolutionSection/SolutionSection_ho.png",
      alt: "解決策1",
      style: { top: "40%", left: "5%", width: "20%" },
      animation: { y: [-15, 15], x: [-10, 10], rotate: [-8, 8], scale: [0.95, 1.05] }
    },
    {
      src: "/images/SolutionSection/SolutionSection_sh.png",
      alt: "解決策2",
      style: { top: "40%", right: "55%", width: "20%" },
      animation: { y: [10, -10], x: [8, -8], rotate: [5, -5], scale: [1.05, 0.95] }
    },
    {
      src: "/images/SolutionSection/SolutionSection_zy.png",
      alt: "解決策3",
      style: { bottom: "55%", left: "15%", width: "20%" },
      animation: { y: [-12, 12], x: [-5, 5], rotate: [-6, 6], scale: [0.98, 1.02] }
    }
  ];

  return (
    <section className="w-full flex flex-col items-center relative overflow-hidden">
      <div className="relative w-full max-w-[960px]">
        {/* メインの背景画像 */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="w-full"
          >
            <Image
              src="/images/SolutionSection/SolutionSection.png"
              alt="チャットレディ未経験でも高収入 5つのサポート体制"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
              unoptimized
            />
          </motion.div>

          {/* 追加のオーバーレイ画像 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [0.95, 1.05, 0.95], y: [-5, 5, -5] }}
            transition={{ opacity: { duration: 0.8 }, scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute w-full h-full"
            style={{ top: "40%", left: "26%", maxWidth: "50%" }}
          >
            <Image
              src="/images/SolutionSection/SolutionSection_i.png"
              alt="特典情報"
              width={600}
              height={400}
              className="w-full h-full object-contain"
              priority
              unoptimized
            />
          </motion.div>

          {/* キラキラエフェクト */}
          <motion.div
            className="absolute inset-0"
            animate={{ background: [
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)"
              ] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>

        {/* オーバーレイ画像 */}
        {overlayImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={image.style}
            initial={{ opacity: 0, y: 20, scale: 0.8, filter: "blur(10px)", rotate: -15 }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", rotate: 0 }}
            transition={{ duration: 1.5, delay: index * 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <motion.div
              animate={{ y: image.animation.y, x: image.animation.x, rotate: image.animation.rotate, scale: image.animation.scale }}
              transition={{ y: { duration: 3 + index, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }, x: { duration: 4 + index, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }, rotate: { duration: 5 + index, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }, scale: { duration: 2.5 + index, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.15))" }}
                unoptimized
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* 下部の追加画像 */}
      <div className="w-full max-w-[960px] mx-auto mt-8">
        <Image
          src="/images/SolutionSection/SolutionSection2.png"
          alt="追加の説明画像"
          width={1200}
          height={800}
          className="w-full h-auto"
          unoptimized
        />
      </div>
    </section>
  );
}