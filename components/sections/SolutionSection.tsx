// components/sections/SolutionSection.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function SolutionSection() {
  return (
    <div className="relative w-full">
      {/* クリーム色の背景を持つメインセクション */}
      <div className="w-full bg-[#FEFCE8] py-20">
        {/* メインコンテンツ */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#4a4a4a] mb-10">
            解決します！!
          </h2>
          
          <motion.div 
            className="max-w-2xl mx-auto bg-[#ccb296] rounded-2xl shadow-lg overflow-hidden mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8 text-center">
              <p className="text-xl font-medium text-white">確定申告は専門スタッフが丸ごと代行</p>
              <p className="text-lg text-white mt-3 opacity-90">完全個室＆最新機材で、プライバシーも収入も安心してサポートいたします</p>
              <div className="flex justify-center gap-2 mt-4">
                <Star className="w-5 h-5 text-white fill-white" />
                <Star className="w-5 h-5 text-white fill-white" />
                <Star className="w-5 h-5 text-white fill-white" />
                <Star className="w-5 h-5 text-white fill-white" />
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
          </motion.div>
          
          {/* コールトゥアクション */}
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 font-medium mb-6">
              あなたも他の女性ライバーと同じように、高い還元率とフルサポートを体験してみませんか？
            </p>
            <motion.button 
              className="px-8 py-3 bg-[#CDB397] text-white rounded-full font-medium text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              無料相談を申し込む
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}