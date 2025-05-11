"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FixedFooterBanner() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-transparent pointer-events-none"
    >
      {/* Container with padding only on larger screens */}
      <div className="container mx-auto px-0 sm:px-4">
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pointer-events-auto w-full sm:w-auto"
          >
            <Image
              src="/banners/fixed-button-sp.png"
              alt="応募はこちら"
              width={640}
              height={120}
              className="w-full max-w-full sm:max-w-[640px] h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}