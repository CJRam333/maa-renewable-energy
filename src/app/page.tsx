import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { Sun } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Section spacing="lg" className="flex items-center min-h-[80vh]">
        <Container className="text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          
          <MotionWrapper className="flex-1 space-y-8" viewportOnce>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-sm font-medium text-[var(--color-muted)]">
              <Sun className="w-4 h-4 text-[var(--color-primary)]" />
              <span>Foundation Ready</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance text-[var(--color-foreground)]">
              Maa Renewable Energy <br className="hidden md:block" />
              Frontend Foundation
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--color-muted)] max-w-2xl text-pretty mx-auto md:mx-0">
              A scalable, responsive, and grounded UI architecture built with Next.js 15, 
              Tailwind CSS 4, and Framer Motion. Ready for production components.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" variant="primary">
                Primary Action
              </Button>
              <Button size="lg" variant="outline">
                Secondary Action
              </Button>
            </div>
          </MotionWrapper>

          <MotionWrapper 
            className="flex-1 w-full max-w-md aspect-square bg-[var(--color-surface)] rounded-[var(--radius-2xl)] border border-[var(--color-border)] shadow-[var(--shadow-float)] flex items-center justify-center relative overflow-hidden"
            variants={{
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            {/* Abstract visual placeholder for atmospheric feeling */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-amber-400)]/10 via-[var(--color-cream-100)] to-[var(--color-leaf-400)]/10" />
            <span className="text-[var(--color-muted)] font-medium relative z-10">Visual Space</span>
          </MotionWrapper>
          
        </Container>
      </Section>
    </main>
  );
}
