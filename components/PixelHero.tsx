"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/content";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

/* ---------------- Motor de píxeles (canvas ripple) ---------------- */
type Pixel = {
  x: number; y: number; color: string; ctx: CanvasRenderingContext2D;
  speed: number; size: number; sizeStep: number; minSize: number;
  maxSizeInt: number; maxSize: number; delay: number; counter: number;
  counterStep: number; isIdle: boolean; isReverse: boolean; isShimmer: boolean;
  draw: () => void; appear: () => void; disappear: () => void; shimmer: () => void;
};

function createPixel(
  ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement,
  x: number, y: number, color: string, baseSpeed: number, delay: number,
): Pixel {
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;
  const p: Pixel = {
    x, y, color, ctx,
    speed: rand(0.08, 0.4) * baseSpeed,
    size: 0, sizeStep: rand(0.12, 0.28), minSize: 0.5, maxSizeInt: 2,
    maxSize: rand(0.5, 2), delay, counter: 0,
    counterStep: rand(1.8, 3.2) + (canvas.width + canvas.height) * 0.008,
    isIdle: false, isReverse: false, isShimmer: false,
    draw() {
      const offset = p.maxSizeInt * 0.5 - p.size * 0.5;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x + offset, p.y + offset, p.size, p.size);
    },
    appear() {
      p.isIdle = false;
      if (p.counter <= p.delay) { p.counter += p.counterStep; return; }
      if (p.size >= p.maxSize) p.isShimmer = true;
      if (p.isShimmer) p.shimmer(); else p.size += p.sizeStep;
      p.draw();
    },
    disappear() {
      p.isShimmer = false; p.counter = 0;
      if (p.size <= 0) { p.isIdle = true; return; }
      p.size -= 0.1; p.draw();
    },
    shimmer() {
      if (p.size >= p.maxSize) p.isReverse = true;
      else if (p.size <= p.minSize) p.isReverse = false;
      if (p.isReverse) p.size -= p.speed; else p.size += p.speed;
    },
  };
  return p;
}

function PixelCanvas({ colors, gap = 6, speed = 30 }: { colors: string[]; gap?: number; speed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number>(0);
  const lastFrameRef = useRef(typeof performance !== "undefined" ? performance.now() : 0);
  const reducedMotionRef = useRef(false);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || colors.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = wrap.getBoundingClientRect();
    const w = Math.floor(width);
    const h = Math.floor(height);
    if (w === 0 || h === 0) { pixelsRef.current = []; return; }
    canvas.width = w; canvas.height = h;
    canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
    const effectiveSpeed = reducedMotionRef.current ? 0 : Math.min(speed, 100) * 0.001;
    const pixels: Pixel[] = [];
    for (let x = 0; x < w; x += gap) {
      for (let y = 0; y < h; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const dx = x - w / 2; const dy = y - h / 2;
        const delay = reducedMotionRef.current ? 0 : Math.sqrt(dx * dx + dy * dy) * 0.65;
        pixels.push(createPixel(ctx, canvas, x, y, color, effectiveSpeed, delay));
      }
    }
    pixelsRef.current = pixels;
  }, [colors, gap, speed]);

  const animate = useCallback((mode: "appear" | "disappear") => {
    cancelAnimationFrame(animationRef.current);
    const frameInterval = 1000 / 60;
    const loop = () => {
      animationRef.current = requestAnimationFrame(loop);
      const now = performance.now();
      const elapsed = now - lastFrameRef.current;
      if (elapsed < frameInterval) return;
      lastFrameRef.current = now - (elapsed % frameInterval);
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pixels = pixelsRef.current;
      for (const pixel of pixels) pixel[mode]();
      if (pixels.length === 0 || pixels.every((p) => p.isIdle)) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    animationRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    init();
    const resizeObserver = new ResizeObserver(() => { init(); animate("appear"); });
    if (wrapRef.current) resizeObserver.observe(wrapRef.current);
    animate("appear");
    return () => { resizeObserver.disconnect(); cancelAnimationFrame(animationRef.current); };
  }, [init, animate]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

/* ---------------- Hero ---------------- */
interface PixelHeroProps {
  word1: string;
  word2: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  bgImage?: string;
}

// Colores de los píxeles: mayoría pizarra oscura + algunos en acento celeste.
const PIXEL_COLORS = ["#27324a", "#2c3852", "#33415f", "#3a4a6b", "#3da7d7"];

const marqueeItems = products.map((p) => p.name);

export function PixelHero({ word1, word2, description, primaryCta, secondaryCta, bgImage }: PixelHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  const Marquee = ({ idPrefix }: { idPrefix: string }) => (
    <div className="flex items-center gap-10">
      {marqueeItems.map((name, i) => (
        <span
          key={`${idPrefix}-${i}`}
          className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-cream/55"
        >
          {name}
          <span className="h-1 w-1 rounded-full bg-accent/60" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative isolate flex min-h-screen w-full select-none flex-col justify-center gap-6 overflow-hidden bg-charcoal px-6 py-0">
      <style>{`
        @keyframes kk-marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .kk-animate-marquee { animation: kk-marquee 28s linear infinite; }
        .kk-glass-text {
          color: transparent;
          background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.45) 25%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.95) 55%, rgba(255,255,255,0.25) 75%, rgba(255,255,255,1) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.25);
          filter: drop-shadow(0 15px 35px rgba(0,0,0,0.4)) drop-shadow(0 5px 10px rgba(0,0,0,0.2));
          animation: kk-shimmer 8s linear infinite;
        }
        @keyframes kk-shimmer { 0% { background-position: 200% center; } 100% { background-position: 0% center; } }
      `}</style>

      {/* Fondo: acabado (mármol) atenuado + píxeles animados */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {bgImage && (
          <>
            <Image
              src={bgImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-charcoal/45" />
          </>
        )}
        <PixelCanvas colors={PIXEL_COLORS} gap={6} speed={30} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--charcoal)_100%)] opacity-80" />
      </div>

      {/* Título */}
      <div className="pointer-events-none z-10 flex w-full flex-col items-center justify-center text-center">
        <h1 className="kk-glass-text flex w-full flex-row flex-wrap items-center justify-center gap-3 px-1 text-7xl leading-none lg:gap-6 lg:text-9xl">
          <span className="font-serif font-medium italic">{word1}</span>
          <span className="font-[var(--font-display)] font-extrabold tracking-tighter">{word2}</span>
        </h1>
      </div>

      {/* Descripción */}
      <div className="pointer-events-none z-10 flex w-full flex-col items-center justify-center px-1 text-center">
        <p className="max-w-xl text-lg font-light leading-relaxed text-cream md:text-xl [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
          {description}
        </p>
      </div>

      {/* CTAs */}
      <div
        className={cn(
          "pointer-events-auto z-10 flex flex-row items-center justify-center gap-3 px-1 transition-all duration-1000",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
        style={{ transitionDelay: "450ms" }}
      >
        <a
          href={primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-accent/90 to-accent px-8 text-sm font-semibold text-charcoal shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.15),0_12px_24px_rgba(0,0,0,0.25)] ring-1 ring-accent/30 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          {primaryCta.text}
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={secondaryCta.href}
          className="relative inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-charcoal-2/80 to-charcoal-2 px-8 text-sm font-semibold text-cream shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_2px_4px_rgba(0,0,0,0.1),0_12px_24px_rgba(0,0,0,0.1)] ring-1 ring-white/15 backdrop-blur-md transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          {secondaryCta.text}
        </a>
      </div>

      {/* Cinta de productos */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-8 z-10 flex w-full flex-col items-center justify-center gap-4 transition-all duration-1000",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
        style={{ transitionDelay: "600ms" }}
      >
        <span className="kicker text-cream/50">Nuestras líneas</span>
        <div className="relative w-full max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="kk-animate-marquee flex w-max gap-10 py-2">
            <Marquee idPrefix="a" />
            <Marquee idPrefix="b" />
          </div>
        </div>
      </div>
    </div>
  );
}
