"use client";

import { useEffect, useRef, useState } from "react";

// Videos reales de @kuskallaimport (TikTok). Se incrustan con el embed oficial.
const VIDEOS = [
  { id: "7500656266956574007", caption: "Panel SPC tipo mármol — +12 diseños en stock" },
  { id: "7400619640700816646", caption: "¿Cómo instalar tus Wall Panels?" },
  { id: "7476253719290596614", caption: "Panel tipo espejo en stock" },
];

declare global {
  interface Window {
    tiktokEmbed?: { lib?: { render?: (el?: Element | Document) => void } };
  }
}

export function TikTokFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Carga los embeds solo cuando la sección está cerca del viewport.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Inyecta/ejecuta el script de TikTok solo cuando ya es visible.
  useEffect(() => {
    if (!visible) return;
    const SCRIPT_ID = "tiktok-embed-script";
    const render = () => window.tiktokEmbed?.lib?.render?.(ref.current ?? document);

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      render();
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.onload = render;
    document.body.appendChild(script);
  }, [visible]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {VIDEOS.map((v) => (
        <div key={v.id} className="mx-auto w-full max-w-[340px]">
          <blockquote
            className="tiktok-embed"
            cite={`https://www.tiktok.com/@kuskallaimport/video/${v.id}`}
            data-video-id={v.id}
            style={{ maxWidth: 340, minWidth: 280, margin: 0 }}
          >
            <section>
              <a
                href={`https://www.tiktok.com/@kuskallaimport/video/${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {v.caption}
              </a>
            </section>
          </blockquote>
        </div>
      ))}
    </div>
  );
}
