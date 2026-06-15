// Contenido y datos reales de Kuskalla Import.

const WA = "51939511299";
export const wa = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

export const site = {
  name: "Kuskalla Import",
  tagline: "Acabados Premium",
  subtitle: "Transforma tus espacios con lujo y facilidad.",
  phone: "+51 939 511 299",
  phoneRaw: WA,
  whatsapp: `https://wa.me/${WA}`,
  email: "moodkuskalla@gmail.com",
  address: "Av. Tomás Valle 806, Lima 15103",
  hours: "Lun–Sáb · Cierra 4:00 p. m.",
  rating: "5,0",
  reviews: 2,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kuskalla+Import+Av.+Tom%C3%A1s+Valle+806+Lima",
  instagram: "https://www.instagram.com/kuskallaimport/",
  facebook: "https://www.facebook.com/kuskallaimportaciones",
  tiktok: "https://www.tiktok.com/@kuskallaimport",
  youtube: "https://www.youtube.com/channel/UCeKdHNmHqheUYWBSHRa1i1g",
};

export interface ValueProp {
  title: string;
  body: string;
  icon: "truck" | "drop" | "click" | "shield";
}

export const valueProps: ValueProp[] = [
  {
    icon: "truck",
    title: "Importador directo",
    body: "Eliminamos intermediarios para ofrecerte la mejor relación calidad-precio del mercado peruano.",
  },
  {
    icon: "drop",
    title: "Impermeable y resistente",
    body: "Materiales SPC y PVC de última generación: resistentes al agua, golpes y humedad.",
  },
  {
    icon: "click",
    title: "Instalación en tiempo récord",
    body: "Sistema click: se instala sobre tu superficie actual, sin obras ni escombros.",
  },
  {
    icon: "shield",
    title: "Cero mantenimiento",
    body: "La estética de los acabados naturales con la durabilidad de la tecnología moderna.",
  },
];

// Enlace al catálogo completo (Linktree con todos los catálogos Canva).
export const catalogUrl = "https://linktr.ee/KuskallaIMEXDI";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  catalog?: string; // catálogo Canva del producto
}

export const products: Product[] = [
  {
    id: "marmol-spc",
    name: "Panel tipo mármol SPC",
    description:
      "La sofisticación del mármol natural con tecnología de alta resistencia. Ligero, impermeable y de instalación rápida.",
    image: "/img/marmol-spc.webp",
    catalog: "https://canva.link/hnueiklkw87p6q1",
  },
  {
    id: "wall-panel",
    name: "Wall panel interior",
    description:
      "Paneles acanalados con efecto 3D espectacular. Textura, calidez y la tendencia #1 del diseño de interiores.",
    image: "/img/wall-panel.webp",
    catalog: "https://canva.link/tyuwd07v461pqla",
  },
  {
    id: "wall-panel-ext",
    name: "Wall panel exterior",
    description:
      "Revestimiento acanalado para fachadas. Resistente a la intemperie, con la calidez de la madera sin su mantenimiento.",
    image: "/img/wall-panel-ext.webp",
    catalog: "https://www.canva.com/design/DAG8n-KBDKM/OiUduTaDAr5yiB8ksvY35A/view",
  },
  {
    id: "panel-sandwich",
    name: "Panel sándwich exterior",
    description:
      "Revestimiento exterior de alto desempeño con núcleo aislante. Ideal para fachadas y cerramientos.",
    image: "/img/panel-sandwich.webp",
    catalog: "https://canva.link/b2g3i6sfolons99",
  },
  {
    id: "panel-espejo",
    name: "Panel tipo espejo",
    description:
      "Maximiza la luz y la amplitud visual. La claridad del cristal con la seguridad y ligereza de un revestimiento moderno.",
    image: "/img/panel-espejo.webp",
  },
  {
    id: "pisos-spc",
    name: "Pisos SPC",
    description:
      "Renueva sin escombros. Sistema click sobre tu piso actual: elegante, silencioso y hecho para durar.",
    image: "/img/pisos-spc.webp",
    catalog: "https://canva.link/z4xjh0kb3p5z3gl",
  },
  {
    id: "techo-upvc",
    name: "Cielo raso PVC",
    description:
      "Cielorrasos limpios y modernos. Resistentes a la humedad, ideales para renovar techos sin obra.",
    image: "/img/techo-upvc.webp",
    catalog: "https://canva.link/em8bd8zw1rfpioq",
  },
  {
    id: "listones-pvc",
    name: "Listones PVC",
    description:
      "Verticalidad y elegancia sin recargar. Acabado limpio, lineal y libre de mantenimiento.",
    image: "/img/listones-pvc.webp",
    catalog: "https://www.canva.com/design/DAGiNk3Y_DU/C0BinwkX5Np84bn_6IXo4A/view",
  },
  {
    id: "moldura",
    name: "Molduras",
    description:
      "Molduras de PVC para zócalos, cornisas y marcos. El detalle que enmarca y eleva cualquier ambiente.",
    image: "/img/moldura.jpg",
    catalog: "https://canva.link/t21ctgjf34vr4ih",
  },
  {
    id: "panel-acustico",
    name: "Panel acústico",
    description:
      "Absorbe el sonido y suma calidez. Diseño moderno que mejora la acústica de cualquier ambiente.",
    image: "/img/panel-acustico.webp",
    catalog: "https://www.canva.com/design/DAG3FmckPYU/sDp3IlKWGAJ_QuHrNbfs3g/view",
  },
  {
    id: "apliques",
    name: "Apliques de pared",
    description:
      "El detalle que eleva el espacio. Iluminación y molduras para un acabado de diseño.",
    image: "/img/apliques.webp",
    catalog: "https://www.canva.com/design/DAGtPy4pp70/jyLU_y83FUKuQDe4uoXQtg/view",
  },
];

export const gallery = [
  "/img/marmol-spc.webp",
  "/img/wall-panel.webp",
  "/img/hero-1.webp",
  "/img/amb-1.webp",
  "/img/panel-espejo.webp",
  "/img/listones-pvc.webp",
  "/img/amb-2.webp",
  "/img/amb-4.webp",
];

export const heroImage = "/img/despues.webp";
export const beforeAfter = {
  before: "/img/antes.webp",
  after: "/img/despues.webp",
};

// Proceso "Cómo trabajamos"
export interface Step {
  n: string;
  title: string;
  body: string;
}
export const steps: Step[] = [
  {
    n: "01",
    title: "Elige tu acabado",
    body: "Explora el catálogo y elige el diseño. Te enviamos muestras y asesoría sin costo.",
  },
  {
    n: "02",
    title: "Cotiza por WhatsApp",
    body: "Cuéntanos el metraje y el producto. Te damos el precio y la disponibilidad al instante.",
  },
  {
    n: "03",
    title: "Recibe e instala",
    body: "Coordinamos el envío a todo el Perú. Sistema click: se instala rápido y sin obra.",
  },
];

// Preguntas frecuentes
export interface Faq {
  q: string;
  a: string;
}
export const faqs: Faq[] = [
  {
    q: "¿Hacen envíos a provincia?",
    a: "Sí. Enviamos a todo el Perú mediante agencias de transporte. El producto viaja embalado y protegido; coordinamos todo por WhatsApp.",
  },
  {
    q: "¿Cómo se instalan los paneles y pisos?",
    a: "La mayoría usa sistema click o adhesivo, y se coloca sobre tu superficie actual sin romper nada. Es rápido y lo puede hacer un técnico o tú mismo siguiendo nuestra guía.",
  },
  {
    q: "¿Los acabados son resistentes al agua?",
    a: "Sí. Los materiales SPC y PVC son impermeables y resistentes a la humedad, ideales para baños, cocinas y exteriores según la línea.",
  },
  {
    q: "¿Cómo cotizo y cuánto cuesta por m²?",
    a: "El precio depende del producto y el metraje. Escríbenos por WhatsApp con las medidas de tu espacio y te damos una cotización al instante.",
  },
  {
    q: "¿Necesito mantenimiento?",
    a: "No. Solo limpieza con un paño húmedo. No requieren pintura, barniz ni tratamientos especiales.",
  },
  {
    q: "¿Puedo ver los productos antes de comprar?",
    a: "Claro. Visítanos en nuestro showroom en Av. Tomás Valle 806 (Los Olivos) o pídenos muestras de los diseños que te interesen.",
  },
];

export const shipping = {
  title: "Envíos a todo el Perú",
  body: "Llevamos tus acabados a Lima y provincias, embalados y asegurados. Coordina tu envío por WhatsApp.",
};
