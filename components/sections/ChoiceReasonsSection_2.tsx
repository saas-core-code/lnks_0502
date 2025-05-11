"use client";
import React from "react";
import Image from "next/image";

export default function ChoiceReasonsSection_2() {
  return (
    <section className="w-full bg-white -mb-12"> {/* 負のマージンを追加して下への余白を減らす */}
      <div className="container mx-auto px-[2px]">
        <div className="relative w-full">
          <Image
            src="/images/choice-reasons/ChoiceReasonsSection2_1.jpg"
            alt="選ばれる理由"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}