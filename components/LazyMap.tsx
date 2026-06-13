"use client";

import { useEffect, useRef, useState } from "react";

// Carga el iframe del mapa solo cuando está cerca del viewport (ahorra datos).
export function LazyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div ref={ref} className="relative aspect-[16/11] w-full overflow-hidden border border-white/10 bg-charcoal-2">
      {visible ? (
        <iframe
          title="Ubicación de Kuskalla Import"
          src="https://www.google.com/maps?q=Av.%20Tom%C3%A1s%20Valle%20806%2C%20Lima%2015103%2C%20Per%C3%BA&output=embed"
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-cream/40">
          Cargando mapa…
        </div>
      )}
    </div>
  );
}
