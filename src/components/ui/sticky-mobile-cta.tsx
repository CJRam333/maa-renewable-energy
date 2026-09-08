"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 w-full z-50 md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] shadow-[var(--shadow-elevation)] p-4 flex gap-3">
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-2 rounded-lg font-medium shadow-sm active:scale-[0.98] transition-transform overflow-hidden"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="truncate">WhatsApp</span>
      </a>
      <a
        href={`tel:+91${siteConfig.phone}`}
        className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] py-3 px-2 rounded-lg font-medium shadow-sm active:scale-[0.98] transition-transform overflow-hidden"
      >
        <Phone className="w-5 h-5 shrink-0" />
        <span className="truncate">Call Us</span>
      </a>
    </div>
  );
}
