import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Flex } from "@/components/layout/flex";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { staggerContainer, slideUp } from "@/lib/animations";

export function WhySolarSection() {
  const advantages = [
    {
      title: "Abundant Sunlight",
      desc: "Tirupati enjoys nearly 300 days of clear sunshine, making it one of the most efficient locations for solar harvesting."
    },
    {
      title: "Defeat Power Cuts",
      desc: "Ensure your family never experiences disruption during grid failures with reliable battery backups."
    },
    {
      title: "Rising Grid Costs",
      desc: "Lock in your energy rates now and protect your household from increasing state electricity tariffs."
    }
  ];

  return (
    <Section spacing="lg">
      <Container>
        <Grid columns={2} gap="xl" className="items-center">
           <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[var(--shadow-elevation)] surface-base">
               <div className="absolute inset-0 bg-[var(--color-cream-200)] flex items-center justify-center p-8 text-center">
                 <span className="text-body-sm italic">
                   [Atmospheric image of Tirupati skyline or local landscape bathed in sunlight]
                 </span>
               </div>
           </div>

           <Flex direction="col" gap="xl">
             <SectionHeader
               tagline="The Local Advantage"
               title="Why Solar makes sense in Tirupati right now."
               description="Harnessing our regional climate isn't just an eco-statement. It is a highly practical financial decision for your family's future."
             />

             <MotionWrapper variants={staggerContainer}>
               <Flex direction="col" gap="lg">
                 {advantages.map((adv, idx) => (
                   <MotionWrapper key={idx} variants={slideUp}>
                     <Flex gap="md" align="start">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-amber-400)]/20 flex items-center justify-center shrink-0 border border-[var(--color-amber-400)]/30">
                          <span className="font-semibold text-[var(--color-amber-600)]">{idx + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1">{adv.title}</h4>
                          <p className="text-body-sm">{adv.desc}</p>
                        </div>
                     </Flex>
                   </MotionWrapper>
                 ))}
               </Flex>
             </MotionWrapper>
           </Flex>
        </Grid>
      </Container>
    </Section>
  );
}
