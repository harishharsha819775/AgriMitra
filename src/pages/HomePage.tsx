import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { WhyAgriMitraSection } from '../components/home/WhyAgriMitraSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyAgriMitraSection />
    </>
  );
}
