"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { beforeAfter } from "@/lib/content";

export function BeforeAfter() {
  const [inset, setInset] = useState<number>(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setInset(Math.min(100, Math.max(0, pct)));
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };
  const stop = () => setDragging(false);

  return (
    <section id="antes-despues" className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="kicker text-accent text-center md:text-left">El cambio</p>
          <div className="mt-3 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:items-end md:text-left">
            <h2 className="font-[var(--font-display)] text-3xl font-bold md:text-5xl">
              Antes y después
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-cream/65">
              Arrastra el control —o toca cualquier punto— para ver cómo una pared
              común se transforma con nuestro mármol SPC. Sin obras, sin escombros.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <div
              ref={containerRef}
              className="relative aspect-video w-full cursor-ew-resize select-none overflow-hidden border border-white/10"
              style={{ touchAction: "none" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={stop}
              onPointerCancel={stop}
              onPointerLeave={stop}
            >
              <span className="kicker pointer-events-none absolute left-4 top-4 z-30 bg-black/60 px-2 py-1 text-cream">
                Antes
              </span>
              <span className="kicker pointer-events-none absolute right-4 top-4 z-30 bg-accent px-2 py-1 text-charcoal">
                Después
              </span>

              {/* Control divisor (decorativo; el contenedor maneja el arrastre) */}
              <div
                className="pointer-events-none absolute top-0 z-20 -ml-px h-full w-0.5 bg-accent"
                style={{ left: inset + "%" }}
              >
                <div className="absolute top-1/2 -ml-5 flex h-11 w-10 -translate-y-1/2 items-center justify-center bg-accent text-charcoal shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                    <path d="M9 6l-4 6 4 6M15 6l4 6-4 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Después (capa superior, recortada desde la izquierda) */}
              <Image
                src={beforeAfter.after}
                alt="Pared con mármol SPC instalado"
                width={1920}
                height={1080}
                priority
                draggable={false}
                className="pointer-events-none absolute left-0 top-0 z-10 aspect-video h-full w-full select-none object-cover"
                style={{ clipPath: "inset(0 0 0 " + inset + "%)" }}
              />
              {/* Antes (capa base) */}
              <Image
                src={beforeAfter.before}
                alt="Pared común antes de instalar"
                width={1920}
                height={1080}
                priority
                draggable={false}
                className="pointer-events-none absolute left-0 top-0 aspect-video h-full w-full select-none object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
