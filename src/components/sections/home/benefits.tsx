import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { staggerContainer, slideUp } from "@/lib/animations";
import { Coins, FileText, Wrench, Home, Shield, ThermometerSun } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Immediate Savings",
      desc: "Watch your monthly electricity bill drop significantly from the very first month of installation.",
      icon: <Coins className="w-5 h-5" />
    },
    {
      title: "Subsidy Support",
      desc: "We handle the paperwork to ensure you receive maximum government subsidies available for rooftop solar.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Zero Maintenance",
      desc: "Modern solar arrays require almost no upkeep. Sit back and let the sun do the heavy lifting.",
      icon: <Wrench className="w-5 h-5" />
    },
    {
      title: "Property Value",
      desc: "Homes equipped with reliable solar systems immediately increase in market valuation and appeal.",
      icon: <Home className="w-5 h-5" />
    },
    {
      title: "25-Year Reliability",
      desc: "Built to last a generation. Enjoy peace of mind with long-term performance warranties.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Cooler Roofs",
      desc: "Panels absorb the direct sunlight, keeping the rooms directly below noticeably cooler during summers.",
      icon: <ThermometerSun className="w-5 h-5" />
    }
  ];

  return (
    <Section spacing="lg" className="bg-[var(--color-cream-100)]">
      <Container>
        <SectionHeader
          align="center"
          tagline="Lasting Value"
          title="Beyond just clean energy."
          description="A solar installation is an upgrade to your lifestyle, offering stability, savings, and peace of mind."
          className="mb-16"
        />

        <MotionWrapper variants={staggerContainer}>
          <Grid columns={3} gap="lg">
            {benefits.map((benefit, idx) => (
              <MotionWrapper key={idx} variants={slideUp}>
                <Card variant="elevated" className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-[var(--color-leaf-400)]/20 mb-4 flex items-center justify-center border border-[var(--color-leaf-400)]/30 text-[var(--color-leaf-600)]">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="mt-2 text-[var(--color-muted)]">
                      {benefit.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </MotionWrapper>
            ))}
          </Grid>
        </MotionWrapper>
      </Container>
    </Section>
  );
}
