"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "女性スタッフはいますか？",
    answer: "女性スタッフ常勤しております💁‍♀️\nご希望でしたら面接や体験入店のご案内は女性スタッフが対応致しますのでご安心くださいね🧚"
  },
  {
    question: "未経験ですがそれでも大丈夫ですか？",
    answer: "9割の方が未経験からのスタートとなります！\nサポートなどもこちらでさせていただきますのでご安心して頂ければと思います🙌🏻"
  },
  {
    question: "友達と一緒に応募はできますか？",
    answer: "友達との面接も可能となっておりますので一緒に来てくださいね👭その際にご友人様のお名前とご年齢をお伺いいたします💬"
  },
  {
    question: "衣装のレンタルはありますか？",
    answer: "衣装に関しましては私服でのお仕事も可能となっておりますが黒系等の重めの色や細かいストライプや千鳥柄は避けたほうがいいお仕事となっております💦店舗に貸出衣装が無料で多数ございますので不要となります👗🫶"
  },
  {
    question: "顔出しは必須ですか？",
    answer: "必須ではありません。\n顔出しなしでも月収50万以上稼ぐ女性も在籍しております。"
  },
  {
    question: "年齢制限はありますか？",
    answer: "満18歳以上であればどなたでもお仕事できます。\n\nライブリンクスでは18歳〜40代の方まで幅広く活躍いただいています。"
  },
  {
    question: "面接時に必要なものを教えてください",
    answer: "顔写真付きの身分証（運転免許証・学生証・マイナンバーカード・パスポート等）をお持ちください。保険証はご利用いただけません。顔写真付きの身分証をお持ちで無い場合お仕事ができません。また、服装に指定もありませんので、普段通りの服装でお越しください。"
  },
  {
    question: "面接後の即日勤務・体験は可能ですか？",
    answer: "はい、可能です。体験をしてみて、今後の継続を決めていただいても構いません。"
  },
  {
    question: "手渡しは可能ですか？",
    answer: "はい、可能です。基本的には振込となりますが、ご事情等考慮し柔軟に対応させていただきますので、まずは一度ご相談ください。"
  },
  {
    question: "いくら稼いだか明細は出ますか？",
    answer: "報酬受け渡し時に明細とお渡ししております。"
  }
];

export default function FaqSection() {
  return (
    <section className="w-full flex justify-center">
      <div 
        className="w-full max-w-[960px] relative"
        style={{
          background: `
            repeating-linear-gradient(
              -45deg,
              #f0f9ff,
              #f0f9ff 20px,
              #e0f2fe 20px,
              #e0f2fe 40px
            )
          `
        }}
      >
        <div className="px-4 pt-6 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
              <span className="relative z-10">よくある質問</span>
              <motion.span
                className="absolute -right-8 -top-6 text-pink-400"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={24} />
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white rounded-xl shadow-sm border border-pink-100 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-pink-50 transition-colors duration-200">
                      <div className="flex items-center gap-3 text-left">
                        <HelpCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                        <span className="text-gray-800">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-600 bg-gradient-to-r from-pink-50/30 to-transparent">
                      {faq.answer.split('\n').map((line, i) => (
                        <p key={i} className="mb-2 last:mb-0">
                          {line}
                        </p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}