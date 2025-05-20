"use client";
import Image from "next/image";

export default function Manga1Section() {
  return (
    <section className="w-full bg-white">
      <div className="flex justify-center">
        <div className="w-full max-w-[960px]">
          <Image
            src="/images/manga/manga_8.webp"
            alt="漫画ページ1"
            width={960}
            height={1440}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}