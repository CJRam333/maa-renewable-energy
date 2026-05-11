import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Flex } from "@/components/layout/flex";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { staggerContainer, fadeRight } from "@/lib/animations";

export function JourneySection() {
  const steps = [
    {
      title: "Consultation",
      desc: "We visit your home, assess your roof, and understand your energy needs."
    },
    {
      title: "Custom Proposal",
      desc: "You receive a clear, honest breakdown of costs, savings, and system design."
    },
    {
      title: "Subsidy Assistance",
      desc: "We file the government paperwork to secure your financial benefits."
    },
    {
      title: "Installation",
      desc: "Our local team installs the system safely and cleanly in 1-2 days."
    },
    {
      title: "Activation",
      desc: "Switch on your system and start generating your own power immediately."
    }
  ];

  return (
    <Section spacing="lg">
      <Container>
        <Grid columns={2} gap="xl">
          <div className="sticky top-24 h-fit">
             <SectionHeader
               tagline="Simple Process"
               title="Your journey to independence."
               description="We have removed the friction. No confusing jargon, no hidden fees, just a smooth, stress-free transition handled by professionals."
             />

             <div className="mt-12 relative aspect-[3/4] w-3/4 rounded-2xl overflow-hidden shadow-[var(--shadow-subtle)] surface-base hidden md:block">
               <div className="absolute inset-0 bg-[var(--color-cream-200)] flex items-center justify-center p-6 text-center">
                 <span className="text-body-sm italic">
                   [Warm photo of team explaining process to a family]
                 </span>
               </div>
             </div>
          </div>

          <MotionWrapper variants={staggerContainer}>
            <Flex direction="col" gap="xl" className="py-8">
              {steps.map((step, idx) => (
                <MotionWrapper key={idx} variants={fadeRight}>
                  <Flex gap="lg" align="start" className="relative">
                    {/* Connecting line */}
                    {idx !== steps.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-[-2rem] w-px bg-[var(--color-border)]" />
                    )}

                    <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-amber-400)] flex items-center justify-center shrink-0 z-10 text-[var(--color-amber-600)] font-bold text-lg shadow-sm">
                      {idx + 1}
                    </div>

                    <div className="pt-2">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-body-md">{step.desc}</p>
                    </div>
                  </Flex>
                </MotionWrapper>
              ))}
            </Flex>
          </MotionWrapper>
        </Grid>
      </Container>
    </Section>
  );
}
