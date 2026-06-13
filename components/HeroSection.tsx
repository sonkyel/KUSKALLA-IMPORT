"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

const InfoIcon = ({ type }: { type: "website" | "phone" | "address" }) => {
  const icons = {
    website: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    address: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  };
  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

interface HeroSectionProps {
  className?: string;
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  backgroundImage: string;
  contactInfo: { website: string; phone: string; address: string };
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
  ({ className, slogan, title, subtitle, callToAction, secondaryCta, backgroundImage, contactInfo }, ref) => {
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
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/25" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-36 pt-28 [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]">
            {slogan && (
              <motion.p className="kicker text-accent" variants={itemVariants}>
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

        {/* ===== ESCRITORIO: hero dividido con clip-path ===== */}
        <motion.section
          className="relative hidden min-h-screen w-full overflow-hidden bg-charcoal text-cream md:flex md:flex-row"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex w-full flex-col justify-between p-8 pt-28 md:w-1/2 md:p-12 md:pt-28 lg:w-3/5 lg:p-16 lg:pt-32">
            <div>
              {slogan && (
                <motion.p className="kicker text-accent" variants={itemVariants}>
                  {slogan}
                </motion.p>
              )}

              <motion.main variants={containerVariants}>
                <motion.h1
                  className="mt-6 font-[var(--font-display)] text-5xl font-extrabold leading-[1.02] text-cream md:text-6xl lg:text-7xl"
                  variants={itemVariants}
                >
                  {title}
                </motion.h1>
                <motion.div className="my-7 h-1 w-20 bg-accent" variants={itemVariants} />
                <motion.p className="mb-9 max-w-md text-base leading-relaxed text-cream/65" variants={itemVariants}>
                  {subtitle}
                </motion.p>
                <motion.div className="flex flex-wrap items-center gap-4" variants={itemVariants}>
                  <a href={callToAction.href} target="_blank" rel="noopener noreferrer" className="btn-accent inline-flex items-center px-6 py-3.5 text-sm font-bold tracking-widest">
                    {callToAction.text}
                  </a>
                  {secondaryCta && (
                    <a href={secondaryCta.href} className="text-sm font-bold tracking-widest text-cream/70 transition-colors hover:text-accent">
                      {secondaryCta.text}
                    </a>
                  )}
                </motion.div>
              </motion.main>
            </div>

            <motion.footer className="mt-12 w-full" variants={itemVariants}>
              <div className="grid grid-cols-1 gap-4 text-xs text-cream/55 sm:grid-cols-3">
                <div className="flex items-center">
                  <InfoIcon type="website" />
                  <span>{contactInfo.website}</span>
                </div>
                <div className="flex items-center">
                  <InfoIcon type="phone" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <InfoIcon type="address" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.footer>
          </div>

          <motion.div
            className="min-h-[320px] w-full bg-cover bg-center md:min-h-full md:w-1/2 lg:w-2/5"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
            transition={{ duration: 1.2, ease: "circOut" }}
          />
        </motion.section>
      </div>
    );
  },
);

HeroSection.displayName = "HeroSection";
