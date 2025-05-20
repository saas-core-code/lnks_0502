import HeroSection from '@/components/sections/HeroSection';
import RoomGallerySection from '@/components/sections/RoomGallerySection';
import Manga1Section from '@/components/sections/Manga1Section';
import PainPointsSection from '@/components/sections/PainPointsSection';
import SolutionSection from '@/components/sections/SolutionSection';
import JoinUsSection from '@/components/sections/JoinUsSection';
import ReasonsSection from '@/components/sections/ReasonsSection';
import LineApplyBanner from '@/components/banners/LineApplyBanner';
import IncomeStatisticsSection from '@/components/sections/IncomeStatisticsSection';
import IncomeStatisticsSection_2 from '@/components/sections/IncomeStatisticsSection_2';
import UserVoicesSection from '@/components/sections/UserVoicesSection';
import BenefitComparisonSection from '@/components/sections/BenefitComparisonSection';
import FaqSection from '@/components/sections/FaqSection';
import ApplicationFlowSection from '@/components/sections/ApplicationFlowSection';
import WelcomeBonusBanner from '@/components/banners/WelcomeBonusBanner';
import SnsLinksBanner from '@/components/banners/SnsLinksBanner';
import FixedFooterBanner from '@/components/banners/FixedFooterBanner';
import LiveStudioTourSection from '@/components/sections/LiveStudioTourSection';
import BlogSummarySection from '@/components/sections/BlogSummarySection';
import { client } from '@/libs/microcms';

async function getLatestBlogs() {
  const data = await client.getList({
    endpoint: 'blogs',
    queries: {
      limit: 3,
      orders: '-publishedAt'
    }
  });
  return data.contents;
}

export default async function Home() {
  const latestBlogs = await getLatestBlogs();

  return (
    <div className="flex flex-col min-h-screen pb-0">
      <HeroSection />
      <RoomGallerySection />
      <Manga1Section />
      <Manga1Section />
      <Manga1Section />
      <Manga1Section />
      <Manga1Section />
      <Manga1Section />
      <Manga1Section />
      <Manga1Section />
      <PainPointsSection />
      <SolutionSection />
      <BenefitComparisonSection />
      <IncomeStatisticsSection />
      <IncomeStatisticsSection_2 />
      <UserVoicesSection />
      <JoinUsSection />
      <ReasonsSection />
      <LiveStudioTourSection />
      <BlogSummarySection blogs={latestBlogs} />
      <FaqSection />
      {false && <WelcomeBonusBanner />}
      <ApplicationFlowSection />
      {false && <WelcomeBonusBanner />}
      {false && <LineApplyBanner />}
      {false && <SnsLinksBanner />}
      <FixedFooterBanner />
    </div>
  );
}