"use client";

import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    label: "報酬還元率",
    live: "55～60％の高率還元",
    other: "平均30～40％程度",
    description: "業界トップクラスの還元率で、あなたの頑張りをしっかり評価します"
  },
  {
    label: "対応スタッフ",
    live: "女性スタッフによる一貫サポート",
    other: "男性スタッフが中心",
    description: "女性ならではの悩みも安心して相談できる環境です"
  },
  {
    label: "税務サポート",
    live: "確定申告から経理処理まで丸ごとお任せ",
    other: "ご自身での申請が必須",
    description: "面倒な手続きも専門スタッフがサポートします"
  },
  {
    label: "個室環境",
    live: "完全個室を1名様専用でご用意",
    other: "複数名でのルーム共有",
    description: "プライバシーを完全に確保した快適な空間をご用意"
  },
  {
    label: "入店お祝い金",
    live: "ご入店いただいた全員にお祝い金を贈呈",
    other: "一部の方のみ対象",
    description: "新しいスタートを応援する特別なウェルカム特典"
  },
  {
    label: "機材・設備",
    live: "高性能カメラ／照明／防音ルームを完備",
    other: "必要最低限の機材のみ",
    description: "プロ仕様の機材で高品質な配信環境を提供"
  }
];

export default function BenefitComparisonSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span style={{ color: "#CDB397" }}>
            選ばれる理由
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              style={{ borderColor: "#CDB397", borderWidth: "1px" }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#CDB397" }}>{item.label}</h3>
                <p className="text-sm mb-4" style={{ color: "#474037" }}>{item.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "rgba(205, 179, 151, 0.1)" }}
                    animate={{ 
                      scale: [1, 1.02, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold" style={{ color: "#CDB397" }}>◎</span>
                      <span className="text-sm font-medium" style={{ color: "#474037" }}>Live Links</span>
                    </div>
                    <p className="text-sm" style={{ color: "#474037" }}>{item.live}</p>
                  </motion.div>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-400 font-bold">△</span>
                      <span className="text-sm font-medium" style={{ color: "#474037" }}>他社</span>
                    </div>
                    <p className="text-sm" style={{ color: "#474037" }}>{item.other}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}