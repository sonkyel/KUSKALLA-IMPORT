import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Analytics } from "@/components/Analytics";
import { site, faqs, products } from "@/lib/content";

const display = Poppins({
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const body = Lato({
  variable: "--font-body",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const SITE_URL = "https://kuskallaimport.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kuskalla Import · Acabados Premium SPC y PVC en Lima",
    template: "%s · Kuskalla Import",
  },
  description:
    "Importadores directos de acabados premium SPC y PVC en Lima: mármol SPC, wall panels, pisos, listones y más. Transforma tus espacios sin obra ni mantenimiento. Envíos a todo el Perú.",
  applicationName: "Kuskalla Import",
  authors: [{ name: "Kuskalla Import" }],
  creator: "Kuskalla Import",
  publisher: "Kuskalla Import",
  category: "Home & Construction",
  keywords: [
    "acabados premium",
    "mármol SPC",
    "panel SPC tipo mármol",
    "wall panel",
    "wall panel Perú",
    "pisos SPC",
    "paneles PVC",
    "listones PVC",
    "panel tipo espejo",
    "revestimientos Lima",
    "Kuskalla Import",
    "decoración de interiores Perú",
    "acabados Los Olivos",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  formatDetection: { telephone: true, address: true },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: SITE_URL,
    siteName: "Kuskalla Import",
    title: "Kuskalla Import · Acabados Premium para Interiores",
    description:
      "Acabados premium SPC y PVC que parecen mármol y madera real. Importadores directos en Lima, envíos a todo el Perú.",
    images: [{ url: "/img/og.jpg", width: 1200, height: 630, alt: "Kuskalla Import — Acabados Premium SPC y PVC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuskalla Import · Acabados Premium",
    description: "Acabados SPC y PVC premium en Lima. Envíos a todo el Perú.",
    images: ["/img/og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Kuskalla Import",
      url: SITE_URL,
      logo: `${SITE_URL}/img/logo.png`,
      image: `${SITE_URL}/img/og.jpg`,
      email: site.email,
      telephone: "+51939511299",
      sameAs: [site.instagram, site.facebook, site.tiktok, site.youtube],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Kuskalla Import",
      inLanguage: "es-PE",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Kuskalla Import",
      image: `${SITE_URL}/img/og.jpg`,
      url: SITE_URL,
      telephone: "+51939511299",
      email: site.email,
      priceRange: "$$",
      currenciesAccepted: "PEN",
      areaServed: { "@type": "Country", name: "Perú" },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Tomás Valle 806",
        addressLocality: "Los Olivos",
        addressRegion: "Lima",
        postalCode: "15103",
        addressCountry: "PE",
      },
      geo: { "@type": "GeoCoordinates", latitude: -12.0167, longitude: -77.06 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "16:00",
        },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "2" },
      sameAs: [site.instagram, site.facebook, site.tiktok],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#catalogo`,
      name: "Catálogo de acabados Kuskalla Import",
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          description: p.description,
          image: `${SITE_URL}${p.image}`,
          brand: { "@type": "Brand", name: "Kuskalla Import" },
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="bg-charcoal text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <MobileCTABar />
        <Analytics />
      </body>
    </html>
  );
}
