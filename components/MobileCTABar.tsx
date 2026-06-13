"use client";

import { site, wa } from "@/lib/content";
import { WhatsappIcon } from "./icons";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-charcoal-2/95 backdrop-blur-md md:hidden">
      <a
        href={`tel:+${site.phoneRaw}`}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-cream"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Llamar
      </a>
      <a
        href={wa("Hola Kuskalla, quiero cotizar acabados premium.")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-accent flex items-center justify-center gap-2 py-3.5 text-sm font-bold"
      >
        <WhatsappIcon className="h-4 w-4" />
        Cotizar
      </a>
    </div>
  );
}
