import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Flex } from "@/components/layout/flex";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { slideUp } from "@/lib/animations";

export function FinancingSection() {
  return (
    <Section spacing="lg" className="bg-charcoal-900 text-cream-50 relative overflow-hidden">
      {/* Dark mode cinematic background */}
      <div className="absolute inset-0 bg-gradient-cinematic opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        <Grid columns={2} gap="xl" className="items-center">
           <MotionWrapper variants={slideUp}>
             <Flex direction="col" gap="lg">
               <SectionHeader
                 tagline="Accessible Energy"
                 title="Pay for the system with the money you save."
                 description="We don't want upfront costs to block your family's progress. Our tailored EMI structures ensure your monthly payment is often lower than your previous electricity bill."
                 className="text-cream-50"
               />

               <ul className="space-y-4 mt-4">
                 {[
                   "Zero down-payment options available",
                   "Flexible 3 to 5-year EMI tenures",
                   "Fast-track approval process",
                   "Seamless integration with state subsidies"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-[var(--color-amber-500)]/20 flex items-center justify-center text-[var(--color-amber-400)] shrink-0">✓</div>
                     <span className="text-[var(--color-cream-100)]">{item}</span>
                   </li>
                 ))}
               </ul>
             </Flex>
           </MotionWrapper>

           <MotionWrapper variants={slideUp}>
             <div className="bg-[var(--color-charcoal-800)] border border-[var(--color-charcoal-700)] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-leaf-500)] opacity-20 blur-3xl rounded-full" />

                <h4 className="text-xl font-semibold mb-6 text-white">Typical Financial Flow</h4>

                <Flex direction="col" gap="md">
                  <div className="flex justify-between items-center border-b border-[var(--color-charcoal-700)] pb-4">
                    <span className="text-[var(--color-cream-200)]">Old Electricity Bill</span>
                    <span className="text-red-400">₹3,500 / mo</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[var(--color-charcoal-700)] pb-4">
                    <span className="text-[var(--color-cream-200)]">New EMI Payment</span>
                    <span className="text-[var(--color-amber-400)]">₹2,800 / mo</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-semibold text-white">Immediate Monthly Saving</span>
                    <span className="font-semibold text-[var(--color-leaf-400)]">₹700 / mo</span>
                  </div>
                </Flex>

                <p className="text-xs text-[var(--color-muted)] mt-6">
                  *Illustrative purposes only. Actual figures depend on roof size and energy consumption.
                </p>
             </div>
           </MotionWrapper>
        </Grid>
      </Container>
    </Section>
  );
}
