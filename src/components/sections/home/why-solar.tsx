import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Flex } from "@/components/layout/flex";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { staggerContainer, slideUp } from "@/lib/animations";
import Image from "next/image";
import { Sun, ShieldCheck, TrendingDown } from "lucide-react";

export function WhySolarSection() {
  const advantages = [
    {
      title: "Abundant Sunlight",
      desc: "Tirupati enjoys nearly 300 days of clear sunshine, making it one of the most efficient locations for solar harvesting.",
      icon: <Sun className="w-6 h-6" />
    },
    {
      title: "Uninterrupted Family Time",
      desc: "Ensure your family never experiences disruption during grid failures. Your evenings remain bright and comfortable.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Rising Grid Costs",
      desc: "Lock in your energy rates now and protect your household from increasing state electricity tariffs.",
      icon: <TrendingDown className="w-6 h-6" />
    }
  ];

  return (
    <Section spacing="lg">
      <Container>
        <Grid columns={2} gap="xl" className="items-center">
           <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[var(--shadow-elevation)] surface-base group">
              <Image
                src="/images/tirupati-landscape-solar.jpg"
                alt="Warm Tirupati evening light hitting modern residential rooftops equipped with solar panels"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-sunlight mix-blend-overlay opacity-40 pointer-events-none" />
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
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-amber-400)]/20 flex items-center justify-center shrink-0 border border-[var(--color-amber-400)]/30 text-[var(--color-amber-600)]">
                          {adv.icon}
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
