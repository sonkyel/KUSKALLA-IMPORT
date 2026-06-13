import { Reveal } from "./Reveal";
import { TruckIcon, DropIcon, ClickIcon, ShieldIcon, WhatsappIcon } from "./icons";
import { steps, badges, shipping, wa } from "@/lib/content";

const badgeIcons = { truck: TruckIcon, drop: DropIcon, click: ClickIcon, shield: ShieldIcon } as const;

export function Process() {
  return (
    <section id="proceso" className="bg-charcoal py-14 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center md:text-left">
          <p className="kicker text-accent">Cómo trabajamos</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold md:text-5xl">
            De la idea a tu pared en 3 pasos
          </h2>
        </Reveal>

        {/* Pasos */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="h-full border border-white/10 bg-charcoal-2 p-7 text-center md:text-left">
                <span className="font-[var(--font-display)] text-4xl font-extrabold text-accent">
                  {s.n}
                </span>
                <h3 className="mt-3 font-[var(--font-display)] text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Banda de envíos */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 border border-accent/30 bg-accent/5 p-7 text-center md:flex-row md:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <TruckIcon className="mt-0.5 h-8 w-8 shrink-0 text-accent" />
              <div>
                <h3 className="font-[var(--font-display)] text-xl font-semibold">{shipping.title}</h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-cream/65">{shipping.body}</p>
              </div>
            </div>
            <a
              href={wa("Hola Kuskalla, quiero coordinar un envío a mi ciudad.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex shrink-0 items-center gap-2 px-5 py-3 text-sm font-bold"
            >
              <WhatsappIcon className="h-4 w-4" />
              Coordinar envío
            </a>
          </div>
        </Reveal>

        {/* Sellos de garantía */}
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {badges.map((bdg, i) => {
            const Icon = badgeIcons[bdg.icon];
            return (
              <Reveal key={bdg.title} delay={i * 0.06}>
                <div className="flex flex-col items-center text-center">
                  <Icon className="h-9 w-9 text-accent" />
                  <h4 className="mt-3 font-[var(--font-display)] text-base font-semibold">
                    {bdg.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-cream/55">{bdg.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
