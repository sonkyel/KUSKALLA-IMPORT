"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardStack, type CardStackItem } from "./CardStack";
import { wa } from "@/lib/content";

const PROJECTS: CardStackItem[] = [
  {
    id: "p1",
    tag: "Mármol SPC",
    title: "Sala revestida en mármol",
    description: "Pared principal con paneles tipo mármol SPC.",
    imageSrc: "/img/marmol-spc.webp",
    href: wa("Hola Kuskalla, me gustó la sala con mármol SPC. ¿Me cotizan?"),
  },
  {
    id: "p2",
    tag: "Wall panel",
    title: "Recepción con wall panel",
    description: "Paneles acanalados de madera para un acabado cálido.",
    imageSrc: "/img/wall-panel.webp",
    href: wa("Hola Kuskalla, quiero wall panel como el de la recepción."),
  },
  {
    id: "p3",
    tag: "Mármol SPC",
    title: "Baño de lujo",
    description: "Revestimiento de mármol SPC resistente a la humedad.",
    imageSrc: "/img/hero-1.webp",
    href: wa("Hola Kuskalla, me interesa el revestimiento del baño."),
  },
  {
    id: "p4",
    tag: "Panel espejo",
    title: "Ambiente con panel espejo",
    description: "Más luz y amplitud visual con paneles tipo espejo.",
    imageSrc: "/img/panel-espejo.webp",
    href: wa("Hola Kuskalla, quiero paneles tipo espejo."),
  },
  {
    id: "p5",
    tag: "Listones PVC",
    title: "Divisorios con listones",
    description: "Verticalidad y elegancia con listones PVC.",
    imageSrc: "/img/listones-pvc.webp",
    href: wa("Hola Kuskalla, me interesan los listones PVC."),
  },
  {
    id: "p6",
    tag: "Wall panel",
    title: "Sala moderna",
    description: "Textura y diseño en tendencia para el living.",
    imageSrc: "/img/amb-2.webp",
    href: wa("Hola Kuskalla, quiero transformar mi sala."),
  },
  {
    id: "p7",
    tag: "Exterior",
    title: "Fachada con teca",
    description: "Wall panel exterior resistente a la intemperie.",
    imageSrc: "/img/wall-panel-ext.webp",
    href: wa("Hola Kuskalla, me interesa el wall panel exterior."),
  },
];

function useCardSize() {
  const [size, setSize] = useState({ w: 480, h: 300 });
  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      const w = Math.max(280, Math.min(500, vw - 48));
      setSize({ w, h: Math.round(w * 0.66) });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return size;
}

export function ProjectsStack() {
  const { w, h } = useCardSize();

  return (
    <section id="proyectos" className="overflow-hidden bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="kicker text-accent text-center md:text-left">Proyectos</p>
          <div className="mt-3 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:items-end md:text-left">
            <h2 className="font-[var(--font-display)] text-3xl font-bold md:text-5xl">
              Espacios transformados
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-cream/65">
              Arrastra o desliza las tarjetas para recorrer ambientes reales
              renovados con nuestros acabados.
            </p>
          </div>
        </motion.div>

        <div className="mt-10">
          <CardStack
            items={PROJECTS}
            cardWidth={w}
            cardHeight={h}
            autoAdvance
            intervalMs={3200}
            pauseOnHover
            loop
            showDots
          />
        </div>
      </div>
    </section>
  );
}
