"use client";

import { useEffect, useState } from 'react';

export default function EarningsExamplesSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="w-full bg-black">
      <div className="relative w-full max-w-[960px] mx-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`w-full h-auto transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/videos/EarningsExamples.webm" type="video/webm" />
          <source src="/videos/EarningsExamples.mp4" type="video/mp4" />
          お使いのブラウザは動画の再生に対応していません。
        </video>
      </div>
    </section>
  );
}