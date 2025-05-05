import React from "react";

export default function LineApplyBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-orange-400 to-pink-400 py-16">
      <div className="container mx-auto px-4">
        {/* 白い四角い枠 */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 flex flex-col items-center">
          {/* 見出し */}
          <h2 className="text-3xl font-bold text-center mb-6 leading-snug">
            <span className="text-pink-500">ライブリンクス</span>で<br />
            一緒に働きませんか？
          </h2>
          {/* ボタン */}
          <a
            href="#"
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            話を聞いてみる！
          </a>
        </div>
      </div>
    </section>
  );
}