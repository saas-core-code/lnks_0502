import React from "react";

export default function LineApplyBanner() {
  return React.createElement(
    "section", 
    { className: "w-full bg-gradient-to-r from-orange-400 to-pink-400 pt-[44px] pb-24" }, // pt-[46px]からpt-[44px]に変更して2px短く
    React.createElement(
      "div", 
      { className: "container mx-auto px-4" },
      React.createElement(
        "div", 
        { className: "bg-white rounded-2xl border border-gray-200 shadow-lg pt-[28px] pb-14 px-10 flex flex-col items-center" }, // pt-[30px]からpt-[28px]に変更して2px短く
        [
          React.createElement(
            "h2", 
            { className: "text-3xl font-bold text-center mb-[28px] leading-snug", key: "heading" }, // mb-[30px]からmb-[28px]に変更して2px短く
            [
              React.createElement(
                "span", 
                { className: "text-pink-500", key: "span" }, 
                "ライブリンクス"
              ),
              "で",
              React.createElement("br", { key: "br" }),
              "一緒に働きませんか？"
            ]
          ),
          React.createElement(
            "a", 
            { 
              href: "#", 
              className: "bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-12 py-4 rounded-full transition-colors duration-200 mb-6",
              key: "button"
            }, 
            "話を聞いてみる！"
          )
        ]
      )
    )
  );
}