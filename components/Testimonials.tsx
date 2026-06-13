"use client";

import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

// Testimonios de muestra basados en los productos y el servicio de Kuskalla.
// Reemplázalos por reseñas reales de tus clientes (y sus fotos) cuando las tengas.
const testimonials: Testimonial[] = [
  {
    text: "Cambié toda la pared de mi sala con el mármol SPC y parece mármol real. La instalación fue rapidísima y sin romper nada.",
    name: "Daniel Bautista",
    role: "Los Olivos",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Pedí wall panels para la recepción de mi oficina y el acabado se ve carísimo. Excelente calidad y atención por WhatsApp.",
    name: "Andrea Medina",
    role: "Arquitecta",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Los paneles tipo espejo agrandaron visualmente mi depa. Llegaron embalados perfecto hasta provincia.",
    name: "Christian Choy",
    role: "Cliente · Arequipa",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    text: "Mejor precio que otras importadoras y la misma calidad. Son importadores directos de verdad.",
    name: "Jorge Ramírez",
    role: "Contratista",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    text: "El piso SPC con sistema click lo instalé yo mismo sobre el piso viejo. Silencioso y resistente al agua.",
    name: "Lucía Flores",
    role: "Surco",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "Asesoría de primera. Me ayudaron a elegir el diseño y me enviaron muestras antes de comprar.",
    name: "Marco Tello",
    role: "Diseñador de interiores",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    text: "Renové el techo del baño con UPVC: cero humedad y se ve impecable. Totalmente recomendados.",
    name: "Pamela Soto",
    role: "San Miguel",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    text: "Compré para un proyecto de 3 departamentos. Stock disponible y entrega a tiempo en todo Lima.",
    name: "Renzo Vargas",
    role: "Inmobiliaria",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    text: "Los listones PVC le dieron un toque moderno a mi local. Fáciles de limpiar y nada de mantenimiento.",
    name: "Kelly Quispe",
    role: "Dueña de cafetería",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role, image }, i) => (
              <div
                className="w-full max-w-xs rounded-xl border border-white/10 bg-charcoal p-8 shadow-lg shadow-black/20"
                key={i}
              >
                <p className="text-sm leading-relaxed text-cream/85">“{text}”</p>
                <div className="mt-5 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={name}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-accent/40"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight text-cream">
                      {name}
                    </div>
                    <div className="text-sm leading-5 tracking-tight text-cream/55">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section id="testimonios" className="relative bg-charcoal py-14 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center text-center"
        >
          <span className="kicker rounded-lg border border-accent/40 px-4 py-1 text-accent">
            Testimonios
          </span>
          <h2 className="mt-5 font-[var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-cream/65">
            Calificación 5,0 en Google. Esto opinan quienes ya transformaron sus
            espacios con Kuskalla Import.
          </p>
        </motion.div>

        <div className="mt-12 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
