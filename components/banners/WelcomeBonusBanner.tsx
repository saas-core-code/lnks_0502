"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WelcomeBonusBanner() {
  return (
    <div className="w-full bg-[#F4CDC7] p-4"> {/* bg-whiteをbg-[#F6A995]に変更 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-[960px] mx-auto"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative overflow-hidden rounded-2xl"
          style={{
            boxShadow: "0 0 0 3px rgba(255, 196, 163, 0.5), 0 8px 20px rgba(0,0,0,0.1)"
          }}
        >
          <Image
            src="/banners/WelcomeBonusBanner.webp"
            alt="入店祝い金キャンペーン"
            width={1200}
            height={300}
            className="w-full h-auto"
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
          {/* グラデーション縁取り */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              border: "3px solid transparent",
              borderRadius: "1rem",
              background: "linear-gradient(45deg, rgba(255,196,163,0.6), rgba(255,220,200,0.8)) border-box",
              WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude"
            }}
          />
          {/* 光の波紋エフェクト */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [1, 1.2],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            style={{
              border: "2px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "1rem"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}