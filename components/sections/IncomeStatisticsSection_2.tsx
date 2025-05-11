"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, Heart, DollarSign, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

function SpinningNumber({ value, unit }: { value: number; unit: string }) {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      animationRef.current?.stop();
      
      animationRef.current = animate(count, value, {
        duration: 2,
        ease: "circOut",
        onComplete: () => setHasAnimated(true)
      });
    }
    return () => animationRef.current?.stop();
  }, [isInView, value, count, hasAnimated]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setIsInView(true)}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.9 },
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
      className="flex items-baseline justify-center"
    >
      <motion.span 
        className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ccb296] to-[#ffc4a3]"
        style={{
          textShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}
      >
        {rounded}
      </motion.span>
      <motion.span 
        className="text-base sm:text-lg ml-1 text-gray-600"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {unit}
      </motion.span>
    </motion.div>
  );
}

export default function IncomeStatisticsSection_2() {
  const statsCards = [
    {
      icon: Users,
      label: "在籍ライバー数",
      value: 147,
      unit: "人",
      color: "#ccb296",
      direction: "right",
      gradient: "from-[#ccb296] to-[#ffc4a3]",
    },
    {
      icon: Heart,
      label: "満足度(アンケート結果)",
      value: 92,
      unit: "%",
      color: "#ffc4a3",
      direction: "left",
      gradient: "from-[#ffc4a3] to-[#fefce8]",
    },
    {
      icon: DollarSign,
      label: "平均月収(1回平均3.5時間)週2~3回",
      value: 35,
      unit: "万円",
      color: "#fefce8",
      direction: "right",
      gradient: "from-[#fefce8] to-[#d8debf]",
    },
    {
      icon: Sparkles,
      label: "未経験スタート率",
      value: 82,
      unit: "%",
      color: "#d8debf",
      direction: "left",
      gradient: "from-[#d8debf] to-[#ccb296]",
    },
  ];

  return (
    <section className="w-full bg-[#fefce8] overflow-hidden py-12 flex justify-center">
      <div className="w-full max-w-[960px] mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statsCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 1,
                delay: index * 0.1
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              className="relative overflow-hidden rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-300 transform-gpu bg-white/80 backdrop-blur-sm h-[180px] sm:h-[200px]"
            >
              {/* Gradient border */}
              <motion.div
                className={`absolute inset-0 p-[2px] bg-gradient-to-r ${card.gradient}/20 rounded-2xl`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              />
              
              <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 h-full flex flex-col">
                <motion.div
                  className="flex items-center justify-between mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <card.icon
                      size={20}
                      className={`p-1 rounded-lg text-white bg-gradient-to-r ${card.gradient} shadow-lg sm:w-6 sm:h-6`}
                    />
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${card.gradient} shadow-sm`}
                  />
                </motion.div>
                
                <motion.h3
                  className="text-xs sm:text-sm font-medium text-gray-600 mb-2 text-center flex-grow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  {card.label}
                </motion.h3>
                
                <SpinningNumber value={card.value} unit={card.unit} />
              </div>

              {/* Ambient background animation */}
              <motion.div
                className="absolute inset-0 z-0 opacity-5"
                animate={{
                  background: [
                    `radial-gradient(circle at 30% 30%, ${card.color}, transparent 70%)`,
                    `radial-gradient(circle at 70% 70%, ${card.color}, transparent 70%)`,
                    `radial-gradient(circle at 30% 70%, ${card.color}, transparent 70%)`,
                    `radial-gradient(circle at 70% 30%, ${card.color}, transparent 70%)`
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}