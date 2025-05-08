"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Heart, Send, Sparkles, Star, Calendar as CalendarIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ApplicationFlowSection() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = [
    "東京都",
    "神奈川県",
    "埼玉県",
    "千葉県",
    "その他",
  ];

  const timeSlots = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <section 
      className="w-full py-16 relative" 
      style={{
        backgroundImage: "url('/images/application-flow/ApplicationFlowSection.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#4a4a4a] relative inline-block">
            <span className="relative z-10">応募フォーム</span>
            <motion.span
              className="absolute -right-8 -top-6 text-[#ccb296]"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={24} />
            </motion.span>
          </h2>
        </motion.div>
        
        <motion.form
          className="space-y-8 bg-white/95 backdrop-blur-sm p-[33px] rounded-2xl shadow-lg border border-[#ccb296]"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <motion.div {...fadeInUp} className="group">
              <Label htmlFor="name" className="inline-flex items-center space-x-2">
                <Heart size={16} className="text-[#ccb296] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>お名前</span>
              </Label>
              <Input
                id="name"
                placeholder="山田 花子"
                required
                className="transition-all duration-300 border-[#ccb296] focus:border-[#ffc4a3] focus:ring-[#ffc4a3]/20"
              />
            </motion.div>

            <motion.div {...fadeInUp} className="group">
              <Label htmlFor="age" className="inline-flex items-center space-x-2">
                <Star size={16} className="text-[#ccb296] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>年齢</span>
              </Label>
              <Input
                id="age"
                type="number"
                placeholder="25"
                required
                className="transition-all duration-300 border-[#ccb296] focus:border-[#ffc4a3] focus:ring-[#ffc4a3]/20"
              />
            </motion.div>

            <motion.div {...fadeInUp} className="group">
              <Label htmlFor="phone" className="inline-flex items-center space-x-2">
                <Star size={16} className="text-[#ccb296] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>電話番号</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="090-1234-5678"
                required
                className="transition-all duration-300 border-[#ccb296] focus:border-[#ffc4a3] focus:ring-[#ffc4a3]/20"
              />
            </motion.div>

            <motion.div {...fadeInUp} className="group">
              <Label htmlFor="email" className="inline-flex items-center space-x-2">
                <Star size={16} className="text-[#ccb296] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>メールアドレス</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                required
                className="transition-all duration-300 border-[#ccb296] focus:border-[#ffc4a3] focus:ring-[#ffc4a3]/20"
              />
            </motion.div>

            <motion.div {...fadeInUp} className="group">
              <Label className="inline-flex items-center space-x-2">
                <Star size={16} className="text-[#ccb296] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>ご希望の勤務地</span>
              </Label>
              <Select>
                <SelectTrigger className="border-[#ccb296] focus:border-[#ffc4a3] focus:ring-[#ffc4a3]/20">
                  <SelectValue placeholder="勤務地を選択してください" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-2 group">
              <Label className="inline-flex items-center space-x-2">
                <Star size={16} className="text-[#ccb296] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>チャット経験</span>
              </Label>
              <RadioGroup defaultValue="no" className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="exp-yes" className="text-[#ccb296]" />
                  <Label htmlFor="exp-yes">あり</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="exp-no" className="text-[#ccb296]" />
                  <Label htmlFor="exp-no">なし</Label>
                </div>
              </RadioGroup>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-4 group">
              <Label className="inline-flex items-center space-x-2">
                <CalendarIcon size={16} className="text-[#ccb296] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>ご希望の面接日時</span>
              </Label>
              <div className="calendar-container">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md"
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return date < today;
                  }}
                  modifiers={{
                    special: (date) => {
                      const specialDates = [15, 20, 25];
                      return specialDates.includes(date.getDate());
                    }
                  }}
                  modifiersStyles={{
                    special: {
                      fontWeight: 'bold',
                      border: '2px solid #ccb296',
                      borderRadius: '50%'
                    }
                  }}
                />
              </div>
              <Select>
                <SelectTrigger className="border-[#ccb296] focus:border-[#ffc4a3] focus:ring-[#ffc4a3]/20">
                  <SelectValue placeholder="希望時間を選択してください" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-2 group">
              <Label className="inline-flex items-center space-x-2">
                <Star size={16} className="text-[#ccb296] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>ご希望の連絡方法</span>
              </Label>
              <RadioGroup defaultValue="email" className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="contact-email" className="text-[#ccb296]" />
                  <Label htmlFor="contact-email">メール</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="contact-phone" className="text-[#ccb296]" />
                  <Label htmlFor="contact-phone">電話</Label>
                </div>
              </RadioGroup>
            </motion.div>

            <motion.div {...fadeInUp} className="group">
              <Label htmlFor="message" className="inline-flex items-center space-x-2 mb-4">
                <Star size={16} className="text-[#ccb296] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>ご質問・ご相談などお気軽にお問い合わせください。</span>
              </Label>
              <Textarea
                id="message"
                placeholder="ご質問やご相談内容をご記入ください"
                className="min-h-[120px] transition-all duration-300 border-[#ccb296] focus:border-[#ffc4a3] focus:ring-[#ffc4a3]/20"
              />
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#ccb296] to-[#ffc4a3] hover:from-[#ffc4a3] hover:to-[#ccb296] text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              disabled={isSubmitting}
            >
              <Send size={18} className="mr-2" />
              {isSubmitting ? "送信中..." : "送信する"}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
