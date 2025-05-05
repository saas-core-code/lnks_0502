"use client";

import Image from "next/image";

export default function FixedFooterBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Image
            src="/banners/fixed-button-sp.png"
            alt="応募はこちら"
            width={640}
            height={120}
            className="w-full max-w-[640px] h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}