import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Flex } from "@/components/layout/flex";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { scaleUp } from "@/lib/animations";

export function TrustSection() {
  return (
    <Section spacing="lg" className="bg-[var(--color-surface)]">
      <Container>
        <MotionWrapper variants={scaleUp}>
          <div className="surface-elevated rounded-3xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto relative overflow-hidden">
             {/* Subtle accent decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-sunlight opacity-30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

             <Grid columns={2} gap="lg" className="items-center">
                <Flex direction="col" gap="md">
                  <div className="w-24 h-24 rounded-full bg-[var(--color-cream-200)] border-2 border-[var(--color-amber-400)] flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                     <span className="text-xs text-[var(--color-muted)] text-center px-2">
                       [Founder Face]
                     </span>
                  </div>
                  <h3 className="text-charcoal-900 mt-4">&quot;People trust people, not corporations.&quot;</h3>
                  <p className="text-body-md text-pretty">
                    I grew up in Tirupati. Building Maa Renewable Energy was about giving our neighbors a choice—a transparent, reliable path to clean energy without the sales pressure. I take personal accountability for the systems that power your family&apos;s daily life.
                  </p>
                  <div>
                    <p className="font-semibold text-charcoal-900">Jeevan Kumar</p>
                    <p className="text-body-sm">Founder, Maa Renewable Energy</p>
                  </div>
                </Flex>

                <Flex direction="col" gap="md" className="h-full justify-center">
                   <div className="bg-[var(--color-cream-50)] rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
                      <Flex gap="sm" align="center" className="mb-2">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-leaf-100)] flex items-center justify-center text-[var(--color-leaf-600)]">✓</div>
                        <h4 className="text-lg">Local Accountability</h4>
                      </Flex>
                      <p className="text-body-sm">We are based right here in Tirupati. When you need us, we are a short drive away.</p>
                   </div>
                   <div className="bg-[var(--color-cream-50)] rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
                      <Flex gap="sm" align="center" className="mb-2">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-leaf-100)] flex items-center justify-center text-[var(--color-leaf-600)]">✓</div>
                        <h4 className="text-lg">Honest Guidance</h4>
                      </Flex>
                      <p className="text-body-sm">No hard selling. Just clear, transparent advice tailored to your family&apos;s needs.</p>
                   </div>
                </Flex>
             </Grid>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  );
}
