import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Flex } from "@/components/layout/flex";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { slideUp } from "@/lib/animations";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <Section spacing="lg" className="bg-[var(--color-surface)]">
      <Container>
        <Grid columns={2} gap="xl" className="items-start">
          <MotionWrapper variants={slideUp}>
            <SectionHeader
              tagline="Get in Touch"
              title="Let's discuss your home's energy needs."
              description="Drop us a message. Our local Tirupati team will reach out to schedule a free, no-pressure consultation."
            />

            <Flex direction="col" gap="lg" className="mt-8">
              <div className="bg-[var(--color-background)] p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-[var(--color-charcoal-900)]">Office Address</h4>
                <p className="text-body-md">
                  {siteConfig.name}<br />
                  {siteConfig.location}<br />
                  (Visits by appointment)
                </p>
              </div>

              <div className="bg-[var(--color-background)] p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-[var(--color-charcoal-900)]">Direct Contact</h4>
                <p className="text-body-md">
                  Phone: {siteConfig.phoneFormatted}<br />
                  Email: {siteConfig.email}
                </p>
              </div>
            </Flex>
          </MotionWrapper>

          <MotionWrapper variants={slideUp}>
            <form className="bg-[var(--color-background)] p-8 md:p-10 rounded-3xl border border-[var(--color-border)] shadow-[var(--shadow-elevation)] flex flex-col gap-6">
              <Flex direction="col" gap="sm">
                <label htmlFor="name" className="text-sm font-medium text-[var(--color-charcoal-900)]">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
                  placeholder="Ram Kumar"
                />
              </Flex>

              <Flex direction="col" gap="sm">
                <label htmlFor="phone" className="text-sm font-medium text-[var(--color-charcoal-900)]">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
                  placeholder="+91"
                />
              </Flex>

              <Flex direction="col" gap="sm">
                <label htmlFor="message" className="text-sm font-medium text-[var(--color-charcoal-900)]">How can we help?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow resize-none"
                  placeholder="I'm interested in lowering my electricity bill..."
                />
              </Flex>

              <Button type="submit" size="lg" className="w-full mt-2" withArrow>
                Send Message
              </Button>
            </form>
          </MotionWrapper>
        </Grid>
      </Container>
    </Section>
  );
}
