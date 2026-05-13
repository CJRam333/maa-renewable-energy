import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Flex } from "@/components/layout/flex";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { fadeRight, fadeLeft } from "@/lib/animations";

export function HeroSection() {
  return (
    <Section spacing="lg" className="relative overflow-hidden bg-gradient-sunlight min-h-[90vh] flex items-center">
      {/* Decorative gradient overlay to enhance cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <Grid columns={2} gap="xl" className="items-center">
          <MotionWrapper variants={fadeRight}>
            <Flex direction="col" gap="lg" align="start">
              <span className="text-label text-[var(--color-amber-600)]">
                Local. Trusted. Forward-facing.
              </span>
              <h1 className="text-balance text-charcoal-900 leading-tight">
                A brighter future <br /> starts at home.
              </h1>
              <p className="text-body-lg text-pretty max-w-xl">
                Transition to clean, reliable solar energy with a team rooted in your community. We make the shift stress-free, transparent, and financially smart.
              </p>

              <Flex gap="md" wrap="wrap">
                <Button size="lg" withArrow>
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  Calculate Savings
                </Button>
              </Flex>
            </Flex>
          </MotionWrapper>

          <MotionWrapper variants={fadeLeft}>
            {/* Placeholder for AI-generated residential image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-float)] border border-[var(--color-border)] surface-base">
               <div className="absolute inset-0 bg-[var(--color-cream-200)] bg-gradient-evening flex items-center justify-center">
                 <span className="text-body-sm italic text-center px-4">
                   [Cinematic imagery of modern Tirupati home bathed in warm evening sunlight with solar panels]
                 </span>
               </div>
            </div>
          </MotionWrapper>
        </Grid>
      </Container>
    </Section>
  );
}
