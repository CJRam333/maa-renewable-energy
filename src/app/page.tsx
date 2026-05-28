import { HeroSection } from "@/components/sections/home/hero";
import { TrustSection } from "@/components/sections/home/trust";
import { WhySolarSection } from "@/components/sections/home/why-solar";
import { BenefitsSection } from "@/components/sections/home/benefits";
import { JourneySection } from "@/components/sections/home/journey";
import { FinancingSection } from "@/components/sections/home/financing";
import { LifestyleSection } from "@/components/sections/home/lifestyle";
import { CTASection } from "@/components/sections/home/cta";
import { ContactSection } from "@/components/sections/home/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden pb-16 md:pb-0">
      <HeroSection />
      <TrustSection />
      <WhySolarSection />
      <BenefitsSection />
      <JourneySection />
      <FinancingSection />
      <LifestyleSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
