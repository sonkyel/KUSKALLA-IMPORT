import Image from "next/image";
import { site } from "@/lib/content";

const nav = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#antes-despues", label: "Antes / Después" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#ubicacion", label: "Ubicación" },
];

const socials = [
  { href: site.instagram, label: "Instagram" },
  { href: site.facebook, label: "Facebook" },
  { href: site.tiktok, label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-2">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image src="/img/logo.png" alt="Kuskalla Import" width={44} height={44} className="h-10 w-10 object-contain" />
              <span className="font-[var(--font-display)] text-lg font-bold">
                Kuskalla<span className="text-accent"> Import</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              Importadores directos de acabados premium SPC y PVC. Transforma tus
              espacios con lujo y facilidad.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="kicker text-cream/40">Menú</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-cream/75 transition-colors hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="kicker text-cream/40">Contacto</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>{site.address}</li>
              <li>
                <a href={`tel:+${site.phoneRaw}`} className="hover:text-cream">{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-cream">{site.email}</a>
              </li>
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-cream/70 transition-colors hover:text-accent">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-cream/40">
          © {new Date().getFullYear()} Kuskalla Import · Lima, Perú. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
