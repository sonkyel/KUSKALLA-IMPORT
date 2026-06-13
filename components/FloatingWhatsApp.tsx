"use client";

import { wa } from "@/lib/content";
import { WhatsappIcon } from "./icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={wa("Hola Kuskalla, quiero más información sobre sus acabados.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 hover:scale-110 md:flex"
    >
      <WhatsappIcon className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
    </a>
  );
}
