import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Flex } from "@/components/layout/flex";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-charcoal-900)] text-[var(--color-cream-100)] pt-16 pb-8 border-t border-[var(--color-charcoal-800)]">
      <Container>
        <Grid columns={12} gap="xl" className="mb-12">
          {/* Brand & Intro */}
          <div className="col-span-12 lg:col-span-5">
            <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">Maa Renewable<br /><span className="text-[var(--color-amber-500)]">Energy</span></h3>
            <p className="text-[var(--color-muted)] max-w-sm mb-6 leading-relaxed">
              Transition to clean, reliable solar energy with a team rooted in your community. Stress-free, transparent, and financially smart.
            </p>
            <Flex gap="md" className="mt-6">
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-charcoal-800)] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors border border-[var(--color-charcoal-700)]">
                <MessageCircle className="w-5 h-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </Flex>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 lg:col-span-3">
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Why Solar', 'Our Process', 'Financing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[var(--color-muted)] hover:text-[var(--color-amber-400)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-6 lg:col-span-4">
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-[var(--color-muted)]">
                <MapPin className="w-5 h-5 shrink-0 text-[var(--color-amber-500)] mt-0.5" />
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-muted)]">
                <Phone className="w-5 h-5 shrink-0 text-[var(--color-amber-500)]" />
                <a href={`tel:+91${siteConfig.phone}`} className="hover:text-[var(--color-amber-400)] transition-colors">
                  {siteConfig.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-muted)]">
                <Mail className="w-5 h-5 shrink-0 text-[var(--color-amber-500)]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-amber-400)] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </Grid>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-charcoal-800)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-muted)]">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
