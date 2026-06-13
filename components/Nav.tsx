"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site, wa } from "@/lib/content";
import { WhatsappIcon } from "./icons";

const links = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#faq", label: "FAQ" },
  { href: "#cotizar", label: "Cotizar" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-charcoal/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Kuskalla Import">
          <Image src="/img/logo.png" alt="Kuskalla Import" width={44} height={44} className="h-10 w-10 object-contain" />
          <span className="font-[var(--font-display)] text-lg font-bold tracking-tight text-cream">
            Kuskalla<span className="text-accent"> Import</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-cream/80 transition-colors hover:text-cream">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={wa("Hola Kuskalla, quiero cotizar acabados premium.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent hidden items-center gap-2 px-4 py-2.5 text-sm font-bold md:inline-flex"
        >
          <WhatsappIcon className="h-4 w-4" />
          Cotizar
        </a>
      </nav>
    </header>
  );
}
