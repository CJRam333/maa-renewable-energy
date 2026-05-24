import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { slideUp } from "@/lib/animations";
import Image from "next/image";

export function LifestyleSection() {
  return (
    <Section spacing="lg">
      <Container>
        <SectionHeader
          align="center"
          tagline="Modern Living"
          title="Seamless integration into your family's daily rhythm."
          description="Solar isn't industrial equipment; it is a quiet, reliable partner powering your everyday life."
          className="mb-16"
        />

        <MotionWrapper variants={slideUp}>
          <Grid columns={12} gap="md" className="auto-rows-[250px] md:auto-rows-[300px]">
            {/* Main large image */}
            <div className="col-span-12 md:col-span-8 row-span-2 relative rounded-3xl overflow-hidden surface-elevated group">
               <Image
                 src="/images/family-living-room-ac.jpg"
                 alt="A middle-class Andhra family relaxing indoors under AC, powered silently by solar"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                 sizes="(max-width: 768px) 100vw, 66vw"
               />
               <div className="absolute inset-0 bg-gradient-evening mix-blend-overlay opacity-30 pointer-events-none" />
            </div>

            {/* Secondary images */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4 row-span-1 relative rounded-3xl overflow-hidden surface-base group">
               <Image
                 src="/images/andhra-home-exterior-panels.jpg"
                 alt="Aesthetic shot of solar panels integrating naturally into a realistic Tirupati residential roof"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                 sizes="(max-width: 768px) 100vw, 33vw"
               />
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-4 row-span-1 relative rounded-3xl overflow-hidden surface-base group">
               <Image
                 src="/images/children-studying-bright-light.jpg"
                 alt="Children studying in bright, uninterrupted light during evening hours thanks to solar battery backup"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                 sizes="(max-width: 768px) 100vw, 33vw"
               />
            </div>
          </Grid>
        </MotionWrapper>
      </Container>
    </Section>
  );
}
