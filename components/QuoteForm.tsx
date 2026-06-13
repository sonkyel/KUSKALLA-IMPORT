"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { WhatsappIcon, PinIcon, ClockIcon } from "./icons";
import { products, wa, site } from "@/lib/content";

export function QuoteForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    producto: products[0].name,
    metraje: "",
    mensaje: "",
  });
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.telefono.trim()) {
      setError("Por favor completa tu nombre y teléfono.");
      return;
    }
    setError("");
    const msg =
      `Hola Kuskalla, quiero una cotización.\n` +
      `• Nombre: ${form.nombre}\n` +
      `• Teléfono: ${form.telefono}\n` +
      `• Producto: ${form.producto}\n` +
      (form.metraje ? `• Metraje: ${form.metraje} m²\n` : "") +
      (form.mensaje ? `• Detalle: ${form.mensaje}\n` : "");
    window.open(wa(msg), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full border border-white/15 bg-charcoal px-4 py-3 text-sm text-cream placeholder-cream/40 outline-none transition-colors focus:border-accent";

  return (
    <section id="cotizar" className="bg-charcoal py-14 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-2 md:px-8">
        <Reveal className="text-center md:text-left">
          <p className="kicker text-accent">Cotización</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold md:text-5xl">
            Pide tu cotización
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/65 mx-auto md:mx-0">
            Completa tus datos y te enviamos el precio por WhatsApp en minutos.
            Importadores directos: el mejor precio del mercado, sin intermediarios.
          </p>
          <div className="mt-8 space-y-3 text-sm text-cream/70">
            <p className="flex items-center justify-center gap-2 md:justify-start"><PinIcon className="h-4 w-4 text-accent" /> {site.address}</p>
            <p className="flex items-center justify-center gap-2 md:justify-start"><ClockIcon className="h-4 w-4 text-accent" /> {site.hours}</p>
            <a href={`mailto:${site.email}`} className="block hover:text-cream">{site.email}</a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="space-y-4 border border-white/10 bg-charcoal-2 p-6 md:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-xs font-semibold text-cream/70">Nombre*</label>
                <input id="nombre" className={field} value={form.nombre} onChange={set("nombre")} placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="telefono" className="mb-1.5 block text-xs font-semibold text-cream/70">Teléfono*</label>
                <input id="telefono" className={field} value={form.telefono} onChange={set("telefono")} placeholder="9XX XXX XXX" inputMode="tel" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="producto" className="mb-1.5 block text-xs font-semibold text-cream/70">Producto</label>
                <select id="producto" className={field} value={form.producto} onChange={set("producto")}>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="metraje" className="mb-1.5 block text-xs font-semibold text-cream/70">Metraje (m²)</label>
                <input id="metraje" className={field} value={form.metraje} onChange={set("metraje")} placeholder="Ej. 20" inputMode="numeric" />
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="mb-1.5 block text-xs font-semibold text-cream/70">Detalle (opcional)</label>
              <textarea id="mensaje" rows={3} className={field} value={form.mensaje} onChange={set("mensaje")} placeholder="Cuéntanos sobre tu proyecto" />
            </div>

            {error && <p className="text-sm text-accent">{error}</p>}

            <button type="submit" className="btn-accent inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold">
              <WhatsappIcon className="h-5 w-5" />
              Enviar por WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
