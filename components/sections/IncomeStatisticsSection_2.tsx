"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, Clock, DollarSign, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";

function SpinningNumber({ value, unit }: { value: number; unit: string }) {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      if (animationRef.current) {
        animationRef.current.stop();
      }
      
      animationRef.current = animate(count, value, {
        duration: 2,
        ease: "easeOut",
        onComplete: () => {
          setHasAnimated(true);
        }
      });
    }
    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [isInView, value, count, hasAnimated]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      className="flex items-baseline"
    >
      <motion.span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        {rounded}
      </motion.span>
      <span className="text-xl ml-1 text-gray-600">{unit}</span>
    </motion.div>
  );
}

export default function IncomeStatisticsSection_2() {
  const statsCards = [
    {
      icon: Users,
      label: "月間利用者数",
      value: 1234,
      unit: "人",
      color: "#FF6B81",
      direction: "right",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Clock,
      label: "平均勤務時間",
      value: 45,
      unit: "時間",
      color: "#82AAFF",
      direction: "left",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      label: "平均月収",
      value: 35,
      unit: "万円",
      color: "#C3E88D",
      direction: "right",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      label: "満足度",
      value: 98,
      unit: "%",
      color: "#FFB6C1",
      direction: "left",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ 
                  opacity: 0, 
                  x: card.direction === "right" ? 100 : -100,
                  rotateY: card.direction === "right" ? 45 : -45
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  rotateY: 0
                }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden transform-gpu hover:shadow-2xl transition-all duration-300"
              >
                {/* グラデーションボーダー */}
                <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="relative z-10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <card.icon 
                      size={24} 
                      className={`bg-gradient-to-r ${card.gradient} p-1 rounded-lg text-white`}
                    />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 mb-2">
                    {card.label}
                  </h3>
                  <SpinningNumber value={card.value} unit={card.unit} />
                </motion.div>

                {/* 背景アニメーション */}
                <motion.div
                  className="absolute inset-0 z-0 opacity-10"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    background: `conic-gradient(from 0deg at 50% 50%, transparent, ${card.color}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}