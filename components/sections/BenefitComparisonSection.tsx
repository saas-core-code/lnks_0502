"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";

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
    <section className="w-full pt-[20px] overflow-x-hidden relative" style={{
      backgroundImage: 'linear-gradient(0deg, #f4f6e9 1px, transparent 1px), linear-gradient(90deg, #f4f6e9 1px, transparent 1px), linear-gradient(0deg, #f4f6e9 0.5px, transparent 0.5px), linear-gradient(90deg, #f4f6e9 0.5px, transparent 0.5px)',
      backgroundSize: '30px 30px, 30px 30px, 6px 6px, 6px 6px',
      backgroundColor: 'white'
    }}>
      <div className="w-full px-4 md:container md:mx-auto">
        {/* ヘッダー画像セクション */}
        <div className="relative flex justify-center items-center mb-8">
          <div className="w-[98%] max-w-4xl relative z-10">
            <Image
              src="/images/benefit-comparison/BenefitComparisonSection.png"
              alt="選ばれる理由"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                x: idx % 2 === 0 ? -100 : 100,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl overflow-hidden border border-[#CDB397]"
            >
              <motion.div
                className="p-6"
                animate={{
                  x: [-5, 5, -5],
                  y: [-3, 3, -3]
                }}
                transition={{
                  x: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
              >
                <motion.h3
                  className="text-lg font-bold mb-2 text-[#CDB397]"
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
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
                    animate={{
                      x: [-3, 3, -3],
                      y: [-2, 2, -2]
                    }}
                    transition={{
                      x: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <motion.div
                      className="flex items-center gap-2 mb-3"
                      animate={{
                        x: [-2, 2, -2],
                        y: [-1, 1, -1]
                      }}
                      transition={{
                        x: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        },
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <span className="font-bold text-[#CDB397] text-2xl">◎</span>
                      <span className="font-serif italic font-bold tracking-wide text-[#B3927A] text-base">
                        Live-Links
                      </span>
                    </motion.div>
                    <motion.p
                      className="text-xs font-medium text-[#474037] leading-relaxed"
                      animate={{
                        x: [-1, 1, -1],
                        y: [-0.5, 0.5, -0.5]
                      }}
                      transition={{
                        x: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        },
                        y: {
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }
                      }}
                    >
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
                    animate={{
                      x: [-2, 2, -2],
                      y: [-1.5, 1.5, -1.5]
                    }}
                    transition={{
                      x: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      },
                      y: {
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 font-bold text-lg">△</span>
                      <span className="text-xs font-medium text-[#474037]">他社</span>
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