"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { PixelHero } from "./PixelHero";

interface HeroSectionProps {
  className?: string;
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  backgroundImage: string;
  contactInfo?: { website: string; phone: string; address: string };
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, slogan, title, subtitle, callToAction, secondaryCta, backgroundImage }, ref) => {
    return (
      <div ref={ref} className={className}>
        {/* ===== MÓVIL: imagen a pantalla completa ===== */}
        <motion.section
          className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-charcoal text-cream md:hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Image
            src={backgroundImage}
            alt="Acabados premium Kuskalla"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/45" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-charcoal via-charcoal/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 pt-24 [text-shadow:0_2px_14px_rgba(0,0,0,0.85)]">
            {slogan && (
              <motion.p className="kicker text-cream/90" variants={itemVariants}>
                {slogan}
              </motion.p>
            )}
            <motion.h1
              className="mt-4 font-[var(--font-display)] text-5xl font-extrabold leading-[1.03] text-cream"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.div className="my-5 h-1 w-16 bg-accent" variants={itemVariants} />
            <motion.p className="mb-7 max-w-sm text-sm leading-relaxed text-cream/80" variants={itemVariants}>
              {subtitle}
            </motion.p>
            <motion.div className="flex flex-wrap items-center gap-3" variants={itemVariants}>
              <a href={callToAction.href} target="_blank" rel="noopener noreferrer" className="btn-accent inline-flex items-center px-6 py-3.5 text-sm font-bold tracking-wide">
                {callToAction.text}
              </a>
              {secondaryCta && (
                <a href={secondaryCta.href} className="inline-flex items-center border border-cream/30 px-6 py-3.5 text-sm font-bold tracking-wide text-cream transition-colors hover:border-accent hover:text-accent">
                  {secondaryCta.text}
                </a>
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* ===== ESCRITORIO: hero de píxeles animados ===== */}
        <div className="hidden md:block">
          <PixelHero
            word1="Transforma"
            word2="espacios"
            description={subtitle}
            primaryCta={callToAction}
            secondaryCta={secondaryCta ?? { text: "Ver catálogo", href: "#catalogo" }}
            bgImage={backgroundImage}
          />
        </div>
      </div>
    );
  },
);

HeroSection.displayName = "HeroSection";
