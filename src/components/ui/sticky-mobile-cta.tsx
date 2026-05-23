"use client";

import { MessageCircle, Phone } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] shadow-[var(--shadow-elevation)] p-4 flex gap-3">
      <a
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-medium shadow-sm active:scale-[0.98] transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
      <a
        href="tel:+910000000000"
        className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] py-3 rounded-lg font-medium shadow-sm active:scale-[0.98] transition-transform"
      >
        <Phone className="w-5 h-5" />
        Call Us
      </a>
    </div>
  );
}
