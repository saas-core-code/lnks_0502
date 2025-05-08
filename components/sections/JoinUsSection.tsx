"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  // 時計のアニメーション用の状態
  const [isBlinking, setIsBlinking] = useState<boolean>(true);
  
  // コロンの点滅を制御
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);
    
    return () => clearInterval(blinkInterval);
  }, []);

  // オレンジカードのアニメーション設定
  const orangeCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 10,
        delay: 0.7, // 他の要素の後に表示
        duration: 0.8
      }
    }
  };

  // カードの出現に遅延を追加（順番に表示）
  const cardDelay = index * 0.1;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* カード全体 */}
      <div className="relative flex flex-col">
        {/* サーモンピンクの左端バー */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "auto" }}
          transition={{ duration: 0.5, delay: cardDelay }}
          className="absolute left-0 top-2 bottom-2 w-6 bg-[#FAD4C0] rounded-l-xl" 
        />
        
        {/* カード本体 */}
        <motion.div
          ref={ref}
          style={{ scale, opacity }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: cardDelay }}
          className="ml-6 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* 画像 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 + cardDelay }}
                className="w-full sm:w-2/5 h-48 rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={data.image}
                  alt={data.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* テキスト情報 */}
              <div className="flex flex-col justify-center flex-1">
                {/* 時間表示 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.4 + cardDelay }}
                  className="flex items-baseline mb-2"
                >
                  <motion.span
                    className="text-3xl font-serif italic font-bold text-[#294460]"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      y: [0, -2, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 4,
                      ease: "easeInOut"
                    }}
                  >
                    {data.time.split(":")[0]}
                    <span className={`mx-1 transition-opacity duration-200 ${isBlinking ? 'opacity-100' : 'opacity-30'}`}>:</span>
                    {data.time.split(":")[1]}
                  </motion.span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.5 + cardDelay }}
                >
                  <h3 className="text-lg font-bold text-[#294460]">{data.label}</h3>
                  <span className="text-sm uppercase tracking-wide text-[#294460]/70 mb-4">{data.labelEn}</span>
                </motion.div>
                
                {/* 説明文 - ふぁ〜と下から出てくるアニメーション */}
                <motion.div
                  variants={orangeCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + cardDelay }}
                  className="text-sm p-4 rounded-xl text-white overflow-hidden mt-4"
                  style={{ background: 'linear-gradient(135deg, #ffc4a3 0%, #ffb391 100%)' }}
                >
                  <p>{data.description}</p>
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
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center text-[#294460] mb-12">1日のスケジュール</h2>
      
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

export default Timeline;