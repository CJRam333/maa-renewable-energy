import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Flex } from "@/components/layout/flex";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { scaleUp } from "@/lib/animations";

export function CTASection() {
  return (
    <Section spacing="lg" className="bg-[var(--color-background)]">
      <Container>
        <MotionWrapper variants={scaleUp}>
          <div className="surface-elevated rounded-3xl p-10 md:p-16 lg:p-20 max-w-4xl mx-auto text-center relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-sunlight opacity-40 pointer-events-none" />

            <Flex direction="col" align="center" gap="lg" className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal-900 text-balance max-w-2xl">
                Ready to bring smarter energy to your home?
              </h2>
              <p className="text-body-lg max-w-xl mx-auto">
                No pressure, no hard selling. Just a friendly conversation about your roof, your bills, and your future.
              </p>

              <Flex gap="md" wrap="wrap" justify="center" className="mt-4">
                <Button size="lg" withArrow>
                  Book a Free Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Chat with our local team
                </Button>
              </Flex>

              <p className="text-body-sm mt-4">
                Based in Tirupati. Serving surrounding regions.
              </p>
            </Flex>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  );
}
