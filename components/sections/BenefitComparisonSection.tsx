// components/sections/BenefitComparisonSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const data = [
  {
    label: "報酬還元率",
    live: "55～60％の高率還元",
    liveHighlight: "55～60％",
    other: "平均30～40％程度",
    description: "業界トップクラスの還元率で、あなたの頑張りをしっかり評価します",
  },
  {
    label: "対応スタッフ",
    live: "女性スタッフによる一貫サポート",
    liveHighlight: "女性スタッフ",
    other: "男性スタッフが中心",
    description: "女性ならではの悩みも安心して相談できる環境です",
  },
  {
    label: "税務サポート",
    live: "確定申告から経理処理まで丸ごとお任せ",
    liveHighlight: "丸ごとお任せ",
    other: "ご自身での申請が必須",
    description: "面倒な手続きも専門スタッフがサポートします",
  },
  {
    label: "個室環境",
    live: "完全個室を1名様専用でご用意",
    liveHighlight: "1名様専用",
    other: "複数名でのルーム共有",
    description: "プライバシーを完全に確保した快適な空間をご用意",
  },
  {
    label: "機材・設備",
    live: "高性能カメラ／照明／防音ルームを完備",
    liveHighlight: "高性能",
    other: "必要最低限の機材のみ",
    description: "プロ仕様の機材で高品質な配信環境を提供",
  },
];

export default function BenefitComparisonSection() {
  return (
    <section className="w-full py-16 overflow-x-hidden relative" style={{
      backgroundImage: `
        linear-gradient(0deg, #f4f6e9 1px, transparent 1px),
        linear-gradient(90deg, #f4f6e9 1px, transparent 1px),
        linear-gradient(0deg, #f4f6e9 0.5px, transparent 0.5px),
        linear-gradient(90deg, #f4f6e9 0.5px, transparent 0.5px)
      `,
      backgroundSize: '30px 30px, 30px 30px, 6px 6px, 6px 6px',
      backgroundColor: 'white'
    }}>
      <div className="w-full px-4 md:container md:mx-auto">
        {/* ヘッダーセクション - 見出しと画像を横に配置 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl font-bold text-[#4a4a4a]">選ばれる理由</h2>
          
          <div className="w-full md:w-1/3">
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#ccb296] p-6 text-center">
                <p className="text-lg font-medium text-white">Live-Links</p>
                <p className="text-sm text-white mt-2">アナタの魅力を最大限に引き出すサポート</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                x: idx % 2 === 0 ? -100 : 100,
                rotateY: idx % 2 === 0 ? -30 : 30,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#CDB397]"
            >
              <motion.div
                className="p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.h3
                  className="text-lg font-bold mb-2 text-[#CDB397]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 + 0.3 }}
                >
                  {item.label}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.15 + 0.4 }}
                  className="mb-4 overflow-hidden"
                >
                  <Marquee
                    speed={30}
                    gradient={true}
                    gradientColor="#ffffff"
                    gradientWidth={50}
                  >
                    <span className="text-base text-[#474037] px-4">
                      {item.description}
                    </span>
                    <span className="text-base text-[#474037] px-4">★</span>
                    <span className="text-base text-[#474037] px-4">
                      {item.description}
                    </span>
                    <span className="text-base text-[#474037] px-4">★</span>
                  </Marquee>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="rounded-xl p-4 bg-[rgba(205,179,151,0.1)]"
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.15 + 0.5 }}
                  >
                    <motion.div
                      className="flex items-center gap-2 mb-3"
                      animate={{
                        y: [0, -4, 0],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <motion.span
                        className="font-bold text-[#CDB397] text-2xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        ◎
                      </motion.span>
                      <motion.span
                        className="font-serif italic font-bold tracking-wide text-[#B3927A] text-base"
                        animate={{
                          scale: [1, 1.05, 1],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        Live-Links
                      </motion.span>
                    </motion.div>
                    <motion.p
                      className="text-xs font-medium text-[#474037] leading-relaxed"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                        scale: [1, 1.02, 1],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      {/* 強調したい単語だけを大きくして色を変える。それ以外は小さく */}
                      {item.liveHighlight && item.live.includes(item.liveHighlight) ? (
                        <>
                          {item.live.split(item.liveHighlight)[0]}
                          <span className="text-lg font-bold text-[#474037] underline decoration-wavy decoration-[#474037] decoration-1 underline-offset-4">
                            {item.liveHighlight}
                          </span>
                          {item.live.split(item.liveHighlight)[1]}
                        </>
                      ) : (
                        item.live
                      )}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="bg-gray-50 rounded-xl p-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 + 0.6 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 font-bold text-lg">
                        △
                      </span>
                      <span className="text-xs font-medium text-[#474037]">
                        他社
                      </span>
                    </div>
                    <p className="text-xs text-[#474037]">{item.other}</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}