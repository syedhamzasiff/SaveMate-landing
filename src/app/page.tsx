import Navbar from '../components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import CredibilitySection from '@/components/sections/CredibilitySection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import DownloadSection from '@/components/sections/DownloadSection';
import PricingSection from '@/components/sections/PricingSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CredibilitySection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
