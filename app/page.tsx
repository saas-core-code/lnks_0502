import HeroSection from '@/components/sections/HeroSection';
import RoomGallerySection from '@/components/sections/RoomGallerySection';
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-[120px]">
      {/* ヒーロー（興味喚起） */}
      <HeroSection />

      {/* カルーセル（こだわりまくり事務所） */}
      <RoomGallerySection />

      {/* 共感（こんな悩みありませんか？） */}
      <PainPointsSection />

      {/* 解決策の提示 */}
      <SolutionSection />

      {/* 選ばれる理由 */}
      <BenefitComparisonSection />

      {/* 円グラフ */}
      {/* 統計データーカード式４つ */}
      <IncomeStatisticsSection />
      <IncomeStatisticsSection_2 />
      
      {/* 先輩の口コミ3名 */}
      <UserVoicesSection />

      {/* ライバーの１日の流れ */}
      <JoinUsSection />

      {/* メリット８ */}
      <ReasonsSection />
      
      {/* スタジオツアー */}
      <LiveStudioTourSection />

      {/* よくある質問 */}
      <FaqSection />

      {/* 応募フォーム */}
      <ApplicationFlowSection />

      {/* バナー（いったん非表示） */}
      {false && <WelcomeBonusBanner />}
      {false && <LineApplyBanner />}
      {false && <SnsLinksBanner />}
      <FixedFooterBanner />
    </div>
  );
}