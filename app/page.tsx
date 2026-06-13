import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { TikTokFeed } from "@/components/TikTokFeed";
import { Testimonials } from "@/components/Testimonials";
import { ProjectsStack } from "@/components/ProjectsStack";
import { HeroSection } from "@/components/HeroSection";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { QuoteForm } from "@/components/QuoteForm";
import { CatalogGrid } from "@/components/CatalogGrid";
import { LazyMap } from "@/components/LazyMap";
import {
  TruckIcon,
  DropIcon,
  ClickIcon,
  ShieldIcon,
  WhatsappIcon,
  StarIcon,
  PinIcon,
  ClockIcon,
  ArrowIcon,
} from "@/components/icons";
import {
  site,
  wa,
  valueProps,
  heroImage,
  catalogUrl,
} from "@/lib/content";

const valueIcons = {
  truck: TruckIcon,
  drop: DropIcon,
  click: ClickIcon,
  shield: ShieldIcon,
} as const;

export default function Home() {
  return (
    <main id="top">
      {/* ===== HERO (pantalla dividida con clip-path) ===== */}
      <HeroSection
        slogan="Acabados Premium · Importadores directos"
        title={
          <>
            Transforma tus
            <br />
            <span className="text-accent">espacios</span>
          </>
        }
        subtitle="Acabados premium SPC y PVC que parecen mármol y madera real. En Lima, importadores directos: sin obras, sin escombros y sin mantenimiento."
        callToAction={{
          text: "COTIZAR POR WHATSAPP",
          href: wa("Hola Kuskalla, quiero cotizar acabados premium para mi espacio."),
        }}
        secondaryCta={{ text: "VER CATÁLOGO", href: "#catalogo" }}
        backgroundImage={heroImage}
        contactInfo={{
          website: "kuskallaimport.com",
          phone: site.phone,
          address: "Av. Tomás Valle 806, Los Olivos",
        }}
      />

      {/* ===== VALUE PROPS ===== */}
      <section className="border-y border-white/5 bg-charcoal-2 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="text-center md:text-left">
            <p className="kicker text-accent">¿Por qué elegirnos?</p>
            <h2 className="mt-3 max-w-2xl font-[var(--font-display)] text-3xl font-bold md:text-4xl mx-auto md:mx-0">
              Calidad premium, sin complicaciones
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((vp, i) => {
              const Icon = valueIcons[vp.icon];
              return (
                <Reveal key={vp.title} delay={i * 0.08}>
                  <div className="border-t border-white/10 pt-6 text-center md:text-left">
                    <div className="text-accent flex justify-center md:justify-start">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 font-[var(--font-display)] text-lg font-semibold">
                      {vp.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/60">
                      {vp.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROCESO + ENVÍOS + GARANTÍA ===== */}
      <Process />

      {/* ===== ANTES / DESPUÉS ===== */}
      <BeforeAfter />

      {/* ===== CATÁLOGO ===== */}
      <section id="catalogo" className="bg-charcoal-2 py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="kicker text-accent text-center md:text-left">Catálogo 2026</p>
            <div className="mt-3 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:items-end md:text-left">
              <h2 className="font-[var(--font-display)] text-3xl font-bold md:text-5xl">
                Todas las posibilidades, en un solo lugar
              </h2>
              <div className="max-w-sm">
                <p className="text-sm leading-relaxed text-cream/65">
                  Líneas premium de revestimientos SPC y PVC para paredes, pisos,
                  techos y fachadas. Explora cada catálogo completo.
                </p>
                <a
                  href={catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 border border-accent/50 px-4 py-2 text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-charcoal"
                >
                  Ver catálogo completo
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <CatalogGrid />
        </div>
      </section>

      {/* ===== ESPACIOS TRANSFORMADOS (pila de tarjetas 3D) ===== */}
      <ProjectsStack />

      {/* ===== VIDEOS (TikTok) ===== */}
      <section id="videos" className="border-t border-white/5 bg-charcoal-2 py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="kicker text-accent text-center md:text-left">Síguenos</p>
            <div className="mt-3 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:items-end md:text-left">
              <h2 className="font-[var(--font-display)] text-3xl font-bold md:text-5xl">
                Míranos en acción
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-cream/65">
                Diseños, instalaciones y novedades en nuestro TikTok e Instagram.
                Toca un video para reproducirlo.
              </p>
            </div>
          </Reveal>

          <div className="mt-12">
            <TikTokFeed />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="btn-accent inline-flex items-center px-5 py-3 text-sm font-bold">
              Ver TikTok
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-white/20 px-5 py-3 text-sm font-bold text-cream transition-colors hover:border-accent hover:text-accent">
              Instagram
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-white/20 px-5 py-3 text-sm font-bold text-cream transition-colors hover:border-accent hover:text-accent">
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <Testimonials />

      {/* ===== FAQ ===== */}
      <Faq />

      {/* ===== COTIZACIÓN ===== */}
      <QuoteForm />

      {/* ===== UBICACIÓN + RESEÑAS ===== */}
      <section id="ubicacion" className="border-t border-white/5 bg-charcoal-2 py-14 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <Reveal className="text-center md:text-left">
              <p className="kicker text-accent">Showroom · Visítanos</p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold md:text-4xl">
                Conoce los acabados en persona
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/65 mx-auto md:mx-0">
                Ven a nuestro showroom en Los Olivos: toca las texturas, compara
                diseños y resuelve tus dudas con nuestra asesoría.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start justify-center gap-3 md:justify-start">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">{site.address}</p>
                    <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-cream/60 underline-offset-4 hover:text-cream hover:underline">
                      Cómo llegar
                    </a>
                  </div>
                </div>
                <div className="flex items-start justify-center gap-3 md:justify-start">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="font-semibold">{site.hours}</p>
                </div>
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <div className="flex text-accent">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <StarIcon key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="text-sm text-cream/70">
                    {site.rating} · {site.reviews} reseñas en Google
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href={wa("Hola Kuskalla, quiero más información.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent inline-flex items-center gap-2 px-5 py-3 text-sm font-bold"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="btn-cream inline-flex items-center px-5 py-3 text-sm font-bold">
                  Escribir correo
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <LazyMap />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="relative overflow-hidden">
        <Image src="/img/wall-panel.webp" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 md:py-24 text-center md:px-8">
          <Reveal>
            <h2 className="font-[var(--font-display)] text-3xl font-bold md:text-5xl">
              ¿Listo para el cambio?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/70">
              Eleva el nivel de tus interiores con la calidad premium de Kuskalla
              Import. Paneles de fácil instalación y acabado de lujo.
            </p>
            <a
              href={wa("Hola Kuskalla, ¡quiero transformar mi espacio! ¿Me ayudan a cotizar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-9 inline-flex items-center gap-2 px-8 py-4 text-sm font-bold"
            >
              <WhatsappIcon className="h-5 w-5" />
              Cotizar ahora
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
