import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { slideUp } from "@/lib/animations";

export function LifestyleSection() {
  return (
    <Section spacing="lg">
      <Container>
        <SectionHeader
          align="center"
          tagline="Modern Living"
          title="Designed for how you live."
          description="Solar isn't industrial equipment; it is a quiet, reliable partner in your family's daily routine."
          className="mb-16"
        />

        <MotionWrapper variants={slideUp}>
          <Grid columns={12} gap="md" className="auto-rows-[250px] md:auto-rows-[300px]">
            {/* Main large image */}
            <div className="col-span-12 md:col-span-8 row-span-2 relative rounded-3xl overflow-hidden surface-elevated group">
               <div className="absolute inset-0 bg-[var(--color-cream-200)] transition-transform duration-700 group-hover:scale-105 flex items-center justify-center p-8 text-center">
                 <span className="text-body-sm italic">
                   [Image of a family relaxing indoors under AC, powered silently by solar]
                 </span>
               </div>
            </div>

            {/* Secondary images */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4 row-span-1 relative rounded-3xl overflow-hidden surface-base group">
               <div className="absolute inset-0 bg-[var(--color-leaf-100)] transition-transform duration-700 group-hover:scale-105 flex items-center justify-center p-6 text-center">
                 <span className="text-body-sm italic">
                   [Aesthetic shot of panels blending with modern architecture]
                 </span>
               </div>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-4 row-span-1 relative rounded-3xl overflow-hidden surface-base group">
               <div className="absolute inset-0 bg-[var(--color-amber-100)] transition-transform duration-700 group-hover:scale-105 flex items-center justify-center p-6 text-center">
                 <span className="text-body-sm italic">
                   [Children studying in bright light during evening hours]
                 </span>
               </div>
            </div>
          </Grid>
        </MotionWrapper>
      </Container>
    </Section>
  );
}
