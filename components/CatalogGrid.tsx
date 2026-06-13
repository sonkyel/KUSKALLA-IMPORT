"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { WhatsappIcon, ArrowIcon } from "./icons";
import { products, wa } from "@/lib/content";

const MOBILE_LIMIT = 6;

export function CatalogGrid() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <Reveal
            key={p.id}
            delay={(i % 4) * 0.06}
            // En móvil oculta los productos extra hasta "Ver más" (desde sm siempre visibles).
            className={!showAll && i >= MOBILE_LIMIT ? "hidden sm:block" : undefined}
          >
            <div className="group flex h-full flex-col overflow-hidden border border-white/10 bg-charcoal transition-colors hover:border-accent/50">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 text-center md:text-left">
                <h3 className="font-[var(--font-display)] text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/55">{p.description}</p>
                <div className="mt-4 flex items-center justify-center gap-4 border-t border-white/10 pt-4 md:justify-between">
                  {p.catalog && (
                    <a
                      href={p.catalog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-cream/80 transition-colors hover:text-accent"
                    >
                      Ver catálogo
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <a
                    href={wa(`Hola Kuskalla, quiero cotizar: ${p.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-accent"
                  >
                    <WhatsappIcon className="h-4 w-4" />
                    Cotizar
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Botón "Ver más" solo en móvil cuando hay productos ocultos */}
      {!showAll && products.length > MOBILE_LIMIT && (
        <div className="mt-8 flex justify-center sm:hidden">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 border border-accent/50 px-6 py-3 text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-charcoal"
          >
            Ver más productos
            <ArrowIcon className="h-4 w-4 rotate-90" />
          </button>
        </div>
      )}
    </>
  );
}
