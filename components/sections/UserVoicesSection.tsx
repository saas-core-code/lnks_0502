"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Marquee from "react-fast-marquee";

const userProfiles = [
  {
    comment: "当初、ライブ配信の世界に足を踏み入れた時は、ただの副業と考えていました。しかし今、この仕事は私の人生の大きな部分を占めるようになりました。最も印象的なのは、ファンとの繋がりです。私が配信するたびに、様々な人から温かいコメントやサポートがあり、それが大きな励みになっています。確かに、一日に30万円以上稼ぐこともありますが、私にとって一番価値あるのは、この仕事を通じて得られる人間関係です。ファンの方々との交流を通して、世界が広がり、新たな自分を発見できました。この仕事を始めて、人とのつながりの大切さを改めて実感しています。毎日が新鮮で、この道を選んだことに感謝しています。"
  },
  {
    comment: "最初は不安でいっぱいでしたが、Live-Linksのスタッフの方々の手厚いサポートのおかげで、今では安心して配信できています。特に嬉しいのは、自分のペースで働けること。プライベートとの両立も上手くいっていて、充実した毎日を送れています。ファンの方々との交流も楽しく、この仕事を選んで本当に良かったと思っています。"
  },
  {
    comment: "Live-Linksでの仕事は、私の人生を大きく変えてくれました。未経験からのスタートでしたが、丁寧な研修とアドバイスのおかげで、今では安定した収入を得られるようになりました。特に魅力的なのは、自分の個性を活かせる環境があること。ファンの方々との絆も深まり、毎日の配信が楽しみになっています。この仕事を通じて、新しい可能性を見つけられたことに感謝しています。"
  }
];

const ProfileCard = ({ profile, index }: { profile: typeof userProfiles[0], index: number }) => {
  const isReversed = index === 1;
  const cardRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity
      }}
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }}
      className="max-w-4xl mx-auto bg-gradient-to-br from-[#c4aa8c] to-[#d4baa0] shadow-xl overflow-hidden rounded-2xl mb-12 last:mb-0 hover:shadow-2xl transition-shadow duration-300"
    >
      <motion.div 
        className="p-4 sm:p-8"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className={`flex flex-col ${isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center gap-6`}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="w-40 h-56 sm:w-48 sm:h-64 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/user-voices/UserVoicesSection.jpg"
              alt="ユーザーボイス画像"
              width={200}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex-1">
            <motion.div
              initial={{ x: isReversed ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className={`text-white ${isReversed ? 'text-right' : 'text-left'}`}
            >
              <h2 className="text-3xl font-serif italic font-bold mb-2">Live-Links</h2>
              <h3 className="text-lg font-bold mb-1">まりなさん</h3>
              <div className="overflow-hidden">
                <Marquee
                  speed={50}
                  gradient={false}
                  direction="left"
                  className="text-xs text-white/90"
                >
                  <span className="mx-4">I have been with Live-Links for one year now.</span>
                  <span className="mx-4">I started with no experience in live streaming.</span>
                </Marquee>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
              className="mt-6 text-white/85 leading-relaxed text-sm bg-black/10 p-4 rounded-xl"
            >
              <p>{profile.comment}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const UserProfileComponent = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-2 sm:px-4 space-y-12">
        {userProfiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} index={index} />
        ))}
      </div>
    </section>
  );
};

export default UserProfileComponent;