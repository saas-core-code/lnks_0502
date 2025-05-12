"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, Star, Sparkles } from 'lucide-react';

interface TimelineItem {
  time: string;
  label: string;
  labelEn: string;
  image: string;
  description: string;
  alt: string;
}

interface TimelineCardProps {
  data: TimelineItem;
  index: number;
}

const timelineData: TimelineItem[] = [
  { 
    time: "20:30", 
    label: "出勤", 
    labelEn: "ARRIVAL", 
    image: "/images/join-us/test2.jpg", 
    description: "『Live-Links』は店長さんをはじめ全員経験者の女性！ 出勤すると元気な挨拶が飛び交って、職場というより『もうひとつのおうち』みたいな温かさです♪",
    alt: "Live-Linksに出勤する女性ライバーの様子"
  },
  { 
    time: "20:40", 
    label: "準備", 
    labelEn: "PREPARATION", 
    image: "/images/join-us/test3.jpg", 
    description: "訪問美容師による無料ヘアメイクで女子力UP♪ 衣装部屋には300着以上の衣装と豊富なウィッグ完備。身バレ対策もバッチリです♡",
    alt: "衣装とメイクの準備をする女性ライバーの様子"
  },
  { 
    time: "21:00", 
    label: "配信開始", 
    labelEn: "START STREAM", 
    image: "/images/join-us/test6.jpg", 
    description: "防音バッチリの個室でリラックス配信♡ 会話時間に応じて報酬が発生！アバター配信もOKだから身バレも安心です♪",
    alt: "個室で配信を開始する女性ライバーの様子"
  },
  { 
    time: "22:30", 
    label: "休憩", 
    labelEn: "BREAK TIME", 
    image: "/images/join-us/test9.jpg", 
    description: "配信が一区切りついたら休憩タイム。ドリンクやおやつ、ご飯まで完備♡スタッフさんとおしゃべりしながらリラックス♪",
    alt: "休憩中にリラックスする女性ライバーの様子"
  },
  { 
    time: "23:00", 
    label: "配信＆休憩", 
    labelEn: "STREAM & REST", 
    image: "/images/join-us/test11.jpg", 
    description: "休憩を挟みながら退勤時間まで配信！24時間OKだから深夜や早朝も安心♡自分のペースで働けるのが魅力♪",
    alt: "自分のペースで配信を続ける女性ライバーの様子"
  },
  { 
    time: "5:00", 
    label: "配信終了", 
    labelEn: "END STREAM", 
    image: "/images/join-us/test13.jpg", 
    description: "退勤時間が来たら配信終了！部屋をピカピカに清掃して次の子へバトンタッチ♪『きれいな部屋で配信できるって嬉しい！』と好評です♪",
    alt: "配信を終了し部屋を清掃する様子"
  },
  { 
    time: "5:10", 
    label: "日報記入", 
    labelEn: "REPORT", 
    image: "/images/join-us/test15.jpg", 
    description: "私服に着替えたら日報を記入。『今日はアドバイスで盛り上がった！』など振り返りもバッチリ♪バスルーム完備だから深夜勤務後もさっぱりして帰れます♡",
    alt: "日報を記入する女性ライバーの様子"
  },
  { 
    time: "5:30", 
    label: "退勤", 
    labelEn: "CLOCK OUT", 
    image: "/images/join-us/test18.jpg", 
    description: "『お疲れさまでした！』と元気に挨拶して退勤。お給料は口座振込で安心。『次のお給料日までまた頑張ろう！』とやる気満タンの締めです♪",
    alt: "退勤する女性ライバーの様子"
  }
];

const TimelineCard: React.FC<TimelineCardProps> = ({ data, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <div className="w-full py-0.5">
        <div className="relative flex flex-col">
          <div className="absolute left-0 top-2 bottom-2 w-6 bg-[#FAD4C0] rounded-l-xl"></div>
          
          <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="ml-6 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  className="w-full sm:w-2/5 h-40 rounded-xl overflow-hidden shadow-md"
                >
                  <Image
                    src={data.image}
                    alt={data.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                
                <div className="flex flex-col justify-center flex-1">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 mb-2"
                  >
                    <span className="text-2xl font-serif italic font-bold text-[#294460]">
                      {data.time.split(":")[0]}
                      <span className="mx-1 animate-blink">:</span>
                      {data.time.split(":")[1]}
                    </span>
                    
                    <div className="h-6 w-px bg-[#294460]/30"></div>
                    
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-lg font-bold text-[#294460]">{data.label}</h3>
                      <span className="text-xs uppercase tracking-wide text-[#294460]/70">{data.labelEn}</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.95 },
                      visible: { 
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.6,
                          ease: "easeOut"
                        }
                      }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                    className="text-sm p-4 rounded-xl text-white overflow-hidden mt-4"
                    style={{ 
                      background: 'linear-gradient(135deg, #ffc4a3 0%, #ffb391 100%)',
                      boxShadow: '0 8px 16px -4px rgba(255, 196, 163, 0.25)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <p className="leading-relaxed">{data.description}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {index < timelineData.length - 1 && (
        <div className="relative flex flex-col items-center" style={{ height: "35px" }}>
          {[0, 0.9, 1.8].map((delay, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -5 }}
              animate={{ 
                opacity: [0, 0.85, 0],
                y: [-5, 12, 30],
                scale: [0.85, 1, 0.85]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2.8,
                ease: "easeInOut",
                delay: delay,
                times: [0, 0.4, 1]
              }}
              className="absolute"
            >
              <svg 
                width="22"
                height="12"
                viewBox="0 0 40 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M3 3C8.33333 8.33333 13.6667 13.6667 19 19C24.3333 13.6667 29.6667 8.33333 35 3" 
                  stroke="#ffc4a3" 
                  strokeWidth="4"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default function Timeline() {
  return (
    <section id="about" className="w-full bg-white overflow-hidden pt-8 pb-12 flex justify-center">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Image
            src="/images/join-us/joinus.png"
            alt="1日のスケジュール"
            width={1200}
            height={300}
            className="w-full h-auto"
            priority
          />
        </motion.div>
        
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineCard key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}