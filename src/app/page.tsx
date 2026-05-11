import { HeroSection } from "@/components/sections/home/hero";
import { TrustSection } from "@/components/sections/home/trust";
import { WhySolarSection } from "@/components/sections/home/why-solar";
import { BenefitsSection } from "@/components/sections/home/benefits";
import { JourneySection } from "@/components/sections/home/journey";
import { FinancingSection } from "@/components/sections/home/financing";
import { LifestyleSection } from "@/components/sections/home/lifestyle";
import { CTASection } from "@/components/sections/home/cta";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      <HeroSection />
      <TrustSection />
      <WhySolarSection />
      <BenefitsSection />
      <JourneySection />
      <FinancingSection />
      <LifestyleSection />
      <CTASection />
    </main>
  );
}
