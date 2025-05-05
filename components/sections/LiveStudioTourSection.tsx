"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function LiveStudioTourSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
            <span className="relative z-10">スタジオツアー</span>
            <motion.span
              className="absolute -right-8 -top-6 text-pink-400"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={24} />
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/LiveStudioTourSection/LiveStudioTourSection.webp"
              alt="ライブスタジオツアー"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.3))"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}