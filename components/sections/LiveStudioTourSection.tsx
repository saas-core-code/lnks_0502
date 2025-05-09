"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LiveStudioTourSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"]
  });
  
  // 背景画像は最初から表示し、スクロールに応じてゆっくり動く
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // タイトルは背景よりも速く動く
  const titleY = useTransform(scrollYProgress, [0, 0.3, 1], ["0%", "-5%", "-20%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.5], [1, 1, 0.8, 0.7]);
  
  // バナーセクションのアニメーション - 最初から完全表示
  // ごくわずかなスクロールで完全表示、その後はスクロールに応じて下に動く
  const bannerY = useTransform(scrollYProgress, [0, 0.02, 0.8], ["0px", "0px", "-30px"]);
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.01, 0.8], [0.95, 1, 0.8]);
  
  // 応募の流れセクションのアニメーションも少し調整
  const stepsY = useTransform(scrollYProgress, [0.2, 0.4, 1], ["60px", "0px", "-40px"]);
  const stepsOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.9, 1], [0, 1, 1, 0.9]);
  
  // 最下部CTAのアニメーション
  const ctaY = useTransform(scrollYProgress, [0.6, 0.8, 1], ["50px", "0px", "-20px"]);
  const ctaOpacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);
  
  // オーバーレイの不透明度を調整
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.3, 0.4, 0.5, 0.6]);

  // 応募ステップデータ
  const steps = [
    { step: "STEP 1", title: "LINEで応募", desc: "24時間いつでも受付中" },
    { step: "STEP 2", title: "カンタン面接", desc: "気軽におしゃべりするだけ" },
    { step: "STEP 3", title: "お仕事開始", desc: "研修があるので安心" },
    { step: "STEP 4", title: "お給料GET", desc: "日払い・週払いOK" }
  ];

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden flex flex-col items-center justify-start"
      style={{ 
        backgroundColor: "#FCEADE",
        minHeight: "100vh"
      }}
    >
      {/* パララックス背景 */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/LiveStudioTourSection/LiveStudioTourSection.webp"
            alt="ライブスタジオツアー背景"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center top" }}
            priority
          />
        </div>
        <motion.div 
          className="absolute inset-0 bg-black" 
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>
      
      {/* 装飾要素 */}
      <motion.div
        className="absolute top-1/3 left-[10%] w-40 h-40 md:w-64 md:h-64 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(255,169,178,0.7) 0%, rgba(255,169,178,0) 70%)",
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]),
          zIndex: 1
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute bottom-1/3 right-[10%] w-48 h-48 md:w-72 md:h-72 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(255,169,178,0.7) 0%, rgba(255,169,178,0) 70%)",
          y: useTransform(scrollYProgress, [0, 1], ["0%", "60%"]),
          zIndex: 1
        }}
        aria-hidden="true"
      />
      
      {/* ヘッダーセクション */}
      <motion.div 
        className="relative z-10 text-center text-white pt-10 md:pt-12 pb-8 md:pb-10 w-full px-4"
        style={{ 
          y: titleY,
          opacity: titleOpacity
        }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
          かわいいチャットルーム
        </h2>
      </motion.div>
      
      {/* メインコンテンツ領域 */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-20 md:pb-24">
        {/* バナーセクション - 初期表示を最適化 */}
        <motion.div
          className="relative bg-white/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl overflow-hidden mb-12 md:mb-16"
          style={{ 
            y: bannerY,
            opacity: bannerOpacity 
          }}
          initial={{ opacity: 1, y: 0 }} // 最初から完全表示
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                今すぐLINEで応募する
              </h3>
              <p className="text-gray-600 mb-4">
                24時間受付中！質問だけでもお気軽にどうぞ
              </p>
              <motion.button
                className="bg-[#06C755] hover:bg-[#05B74C] text-white font-bold py-3 px-8 rounded-full flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.89a.5.5 0 0 1 0 .86l-2.115 1.32a.5.5 0 0 1-.752-.432v-.636H4.5a.5.5 0 0 1-.5-.5V9.5a.5.5 0 0 1 .5-.5h11.998v-.639a.5.5 0 0 1 .752-.432l2.115 1.322a.5.5 0 0 1 0 .86z" />
                </svg>
                LINEで応募する
              </motion.button>
            </div>
            <div className="w-full md:w-auto flex-shrink-0">
              <div className="bg-[#06C755] text-white font-bold text-xl md:text-2xl p-4 rounded-lg text-center">
                祝金 8,000円<br />
                <span className="text-sm font-normal">プレゼント中！</span>
              </div>
            </div>
          </div>
          
          {/* 装飾要素 */}
          <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full opacity-10 bg-[#06C755]" aria-hidden="true" />
          <div className="absolute -left-16 -top-16 w-32 h-32 rounded-full opacity-10 bg-[#06C755]" aria-hidden="true" />
          
          {/* 注目効果（オプション） - バナー周囲に軽いグロー効果 */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              boxShadow: "0 0 30px 5px rgba(255,169,178,0.3)",
              borderRadius: "inherit"
            }}
            aria-hidden="true"
          />
        </motion.div>
        
        {/* 応募ステップ */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          style={{ 
            y: stepsY,
            opacity: stepsOpacity
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md mb-6">
            応募の流れ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur p-5 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="text-pink-400 font-bold mb-1">{step.step}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* 最下部のCTA */}
        <motion.div
          className="text-center"
          style={{ 
            y: ctaY,
            opacity: ctaOpacity
          }}
        >
          <p className="text-white text-lg mb-4 drop-shadow-md">
            お気軽にお問い合わせください
          </p>
          <motion.button
            className="bg-[#06C755] hover:bg-[#05B74C] text-white font-bold py-4 px-10 rounded-full inline-flex items-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.89a.5.5 0 0 1 0 .86l-2.115 1.32a.5.5 0 0 1-.752-.432v-.636H4.5a.5.5 0 0 1-.5-.5V9.5a.5.5 0 0 1 .5-.5h11.998v-.639a.5.5 0 0 1 .752-.432l2.115 1.322a.5.5 0 0 1 0 .86z" />
            </svg>
            LINEで応募する
          </motion.button>
          <p className="text-white/70 text-sm mt-3 drop-shadow-sm">
            ※ 質問だけでもOKです！
          </p>
        </motion.div>
      </div>
      
      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-hidden="true"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5v14M18 13l-6 6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}