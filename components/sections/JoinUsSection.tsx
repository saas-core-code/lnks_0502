"use client";

import React from "react";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const timelineItems = [
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

export default function JoinUsSection() {
  const srOnlyStyle: React.CSSProperties = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    whiteSpace: "nowrap",
    borderWidth: "0"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Live-Linksでの1日の流れ",
    "description": "Live-Linksで働く女性ライバーの1日のスケジュールと流れを詳しく説明します。出勤から退勤までの各ステップを紹介。",
    "step": timelineItems.map((item, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": item.label,
      "text": item.description,
      "image": {
        "@type": "ImageObject",
        "url": item.image
      }
    })),
    "totalTime": "PT9H"
  };

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Live-Links",
    "description": "女性ライバー向けの安全で快適な配信環境を提供する施設",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "防音個室",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "衣装部屋",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "メイクサービス",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "24時間営業",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "バスルーム完備",
        "value": true
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Live-Links｜女性ライバー1日の流れ | 未経験からでも安心して働ける環境</title>
        <meta name="description" content="Live-Linksで働く女性ライバーの1日をご紹介。出勤から退勤まで充実の環境とサポート体制で、未経験からでも安心して始められます。衣装・メイク完備で身バレ対策も万全。" />
        <meta property="og:title" content="Live-Links｜女性ライバー1日の流れ | 未経験からでも安心して働ける環境" />
        <meta property="og:description" content="Live-Linksで働く女性ライバーの1日をご紹介。安全な環境で高収入を目指せます。" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/join-us/test1.jpg" />
        <link rel="canonical" href="https://live-links.example.com/join-us" />
      </Head>

      <section id="daily-schedule" className="w-full pt-[10px] pb-[60px]" style={{ background: `repeating-linear-gradient(to bottom, #FFF5F9 0px, #FFF5F9 20px, #FCDDE4 20px, #FCDDE4 40px)` }}>
        <h2 id="schedule-title" className="text-3xl font-bold text-center my-6 fancy-title">女性ライバーの1日の流れ</h2>

        <div className="container mx-auto px-2 sm:px-4">
          <div className="relative flex justify-center mb-8">
            <figure>
              <Image 
                src="/images/join-us/test1.jpg" 
                alt="Live-Linksライバーの1日の流れ紹介" 
                className="w-full max-w-2xl rounded-2xl shadow-md" 
                aria-labelledby="schedule-title"
                width={1200}
                height={800}
                priority
              />
              <figcaption className="sr-only">Live-Linksでの女性ライバーの1日の流れを紹介する画像です</figcaption>
            </figure>
          </div>

          <article className="relative flex flex-col items-center space-y-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />

            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              Live-Linksでの女性ライバーの1日をご紹介します。未経験からでも安心の環境で、快適に働きながら高収入を目指せます。
            </p>

            <nav aria-label="タイムラインナビゲーション" className="hidden sm:flex justify-center w-full mb-6">
              <ul className="flex flex-wrap justify-center gap-4">
                {timelineItems.map((item, idx) => (
                  <li key={`nav-${idx}`}>
                    <a href={`#step-${idx+1}`} className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-pink-500 border border-pink-300 hover:bg-pink-50 transition-colors">
                      {item.time} {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {timelineItems.map((item, idx) => (
              <motion.section
                id={`step-${idx+1}`}
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center w-full max-w-4xl"
                aria-labelledby={`timeline-heading-${idx}`}
              >
                <div className="relative bg-white rounded-2xl shadow-md p-2 w-full">
                  <div className="absolute top-0 right-0 w-32 h-32">
                    <div className="triangle-stripe-accent w-full h-full" aria-hidden="true" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-32 h-32">
                    <div className="triangle-stripe-accent triangle-stripe-accent--bottom-left w-full h-full" aria-hidden="true" />
                  </div>

                  <div className={`relative rounded-2xl p-6 ${item.label === '配信＆休憩' ? 'border border-pink-200' : 'border-2 border-dashed border-pink-300'}`}>
                    <div className="flex items-start gap-4 mb-2">
                      <div className="flex-shrink-0 bg-white border-2 border-pink-200 rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-md">
                        <Clock className="text-pink-300 w-4 h-4 mb-1" aria-hidden="true" />
                        <time dateTime={`PT${item.time.replace(':', 'H')}M`} className="text-[#FF6B81] text-sm font-bold">{item.time}</time>
                      </div>
                      <div className="flex-grow flex flex-col items-center justify-center">
                        <h3 id={`timeline-heading-${idx}`} className="text-2xl font-bold leading-tight tracking-wide text-center fancy-title">
                          {item.label}
                        </h3>
                        <span className="mt-1 fancy-en-title" lang="en">
                          {item.labelEn}
                        </span>
                      </div>
                      <div className="flex-shrink-0 w-16"></div>
                    </div>

                    <div className="border-t border-pink-200 my-4" aria-hidden="true" />

                    <div className="flex flex-col md:flex-row gap-6">
                      <figure className="flex-1">
                        <Image 
                          src={item.image} 
                          alt={item.alt} 
                          className="rounded-lg w-full shadow-md" 
                          loading="lazy"
                          width={600}
                          height={400}
                        />
                      </figure>
                      <motion.div 
                        className="flex-1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.8,
                          ease: [0.34, 1.56, 0.64, 1],
                          delay: 0.2
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-white rounded-lg p-4 shadow-lg border border-pink-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                          <motion.p
                            className="text-sm text-gray-700 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.6,
                              ease: "easeOut",
                              delay: 0.4
                            }}
                            viewport={{ once: true }}
                          >
                            {item.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}