import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'モダンな日本語ウェブサイト',
  description: '最高品質のサービスとコンテンツをご提供します。',
  keywords: '日本語, サービス, 高品質',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden w-full">
        <Header />
        <main className="overflow-x-hidden w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}