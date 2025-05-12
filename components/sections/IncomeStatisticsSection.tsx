"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function IncomeStatisticsSection() {
  const ageData = [
    { name: "10代", value: 10, color: "#4A4A4A" },
    { name: "20代", value: 40, color: "#ffc4a3" },
    { name: "30代", value: 30, color: "#fefce8" },
    { name: "40代", value: 20, color: "#d8debf" }
  ];
  const [pieRotation, setPieRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPieRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="rewards" className="w-full bg-[#fefce8] overflow-hidden">
      <div className="w-full pt-[40px] pb-[20px] flex justify-center">
        <Image
          src="/images/income-stats/IncomeStatisticsSection_1.png"
          alt="収入統計ヘッダー"
          width={1200}
          height={300}
          className="w-[75%] h-auto block"
          priority
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-[#ccb296] rounded-2xl p-6 shadow-lg mb-[40px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              style={{ 
                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.1))",
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    startAngle={pieRotation}
                    endAngle={pieRotation + 360}
                  >
                    {ageData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke="white"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      fontFamily: "'M PLUS Rounded 1c', sans-serif"
                    }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    iconType="circle"
                    formatter={(value) => (
                      <span className="font-rounded text-white">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}