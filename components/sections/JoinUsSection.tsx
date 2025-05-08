"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// タイムラインのデータの型定義
interface TimelineItem {
  time: string;
  label: string;
  labelEn: string;
  image: string;
  description: string;
  alt: string;
}

// TimelineCard の Props 型定義
interface TimelineCardProps {
  data: TimelineItem;
  index: number;
}

// タイムラインのデータ
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

// 1枚のカードコンポーネント
const TimelineCard: React.FC<TimelineCardProps> = ({ data, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // カードの出現に遅延を追加（順番に表示）但し遅延を短くする
  const cardDelay = index * 0.05;

  // オレンジカードのアニメーション設定 - よりゆっくりな表現に
  const orangeCardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 2.5, // アニメーション時間を延長
        ease: [0.22, 1, 0.36, 1], // よりスムーズなイージング
        opacity: { duration: 3 }, // 透明度の変化をさらにゆっくりに
        scale: { duration: 2 } // スケールの変化も調整
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4">
      <div className="relative flex flex-col">
        {/* サーモンピンクの左端バー - 静的要素に変更 */}
        <div className="absolute left-0 top-2 bottom-2 w-6 bg-[#FAD4C0] rounded-l-xl"></div>
        
        {/* カード本体 - アニメーションを軽量化 */}
        <motion.div
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.3, delay: cardDelay }}
          className="ml-6 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* 画像 - アニメーション軽量化・高さを少し縮小 */}
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
              
              {/* テキスト情報 */}
              <div className="flex flex-col justify-center flex-1">
                {/* 時間、お題、英語を一行にまとめる */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 mb-2"
                >
                  {/* 時間表示 */}
                  <span className="text-2xl font-serif italic font-bold text-[#294460]">
                    {data.time.split(":")[0]}
                    <span className="mx-1 animate-blink">:</span>
                    {data.time.split(":")[1]}
                  </span>
                  
                  {/* 縦線で区切る */}
                  <div className="h-6 w-px bg-[#294460]/30"></div>
                  
                  {/* お題と英語ラベル */}
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-bold text-[#294460]">{data.label}</h3>
                    <span className="text-xs uppercase tracking-wide text-[#294460]/70">{data.labelEn}</span>
                  </div>
                </motion.div>
                
                {/* 説明文 - アニメーションを更新 */}
                <motion.div
                  variants={orangeCardVariants}
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
  );
};

// 全体のタイムラインコンポーネント
const Timeline: React.FC = () => {
  return (
    <div className="py-6">
      <h2 className="text-3xl font-bold text-center text-[#294460] mb-8">1日のスケジュール</h2>
      
      <div className="relative">
        {/* 縦のタイムラインライン */}
        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-[#FAD4C0] z-0"></div>
        
        {/* カード */}
        {timelineData.map((item, index) => (
          <TimelineCard key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

// CSSアニメーション用のスタイルを追加（tailwind.config.jsに以下を追加）
// extend: {
//   animation: {
//     'blink': 'blink 1s infinite',
//   },
//   keyframes: {
//     blink: {
//       '0%, 100%': { opacity: 1 },
//       '50%': { opacity: 0.3 },
//     },
//   },
// },

export default Timeline;