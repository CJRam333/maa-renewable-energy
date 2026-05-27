import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import "./globals.css";

// Configure Plus Jakarta Sans for a modern, approachable, and readable feel
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maarenewable.in"),
  title: {
    template: "%s | Maa Renewable Energy",
    default: "Maa Renewable Energy | Trusted Solar Solutions in Tirupati",
  },
  description: "Transition to clean, reliable solar energy with a team rooted in your community. Maa Renewable Energy offers stress-free, transparent, and financially smart solar installations in Tirupati, Andhra Pradesh.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://maarenewable.in",
    siteName: "Maa Renewable Energy",
    title: "Maa Renewable Energy | Trusted Solar Solutions in Tirupati",
    description: "Transition to clean, reliable solar energy with a team rooted in your community. Maa Renewable Energy offers stress-free, transparent, and financially smart solar installations in Tirupati, Andhra Pradesh.",
    images: [
      {
        url: "/images/og/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Maa Renewable Energy - Tirupati Solar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Renewable Energy | Trusted Solar Solutions in Tirupati",
    description: "Transition to clean, reliable solar energy with a team rooted in your community.",
    images: ["/images/og/og-preview.jpg"],
  },
  alternates: {
    canonical: "https://maarenewable.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Maa Renewable Energy",
              "image": "https://maarenewable.in/images/og/og-preview.jpg",
              "description": "Trusted local clean-energy solutions in Tirupati. We provide residential solar panel installations, transparent pricing, and subsidy assistance.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tirupati",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "IN"
              },
              "telephone": "+910000000000",
              "url": "https://maarenewable.in",
              "founder": {
                "@type": "Person",
                "name": "Jeevan Kumar"
              }
            }),
          }}
        />
      </head>
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
