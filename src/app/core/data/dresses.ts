export type DressOccasion = 'wedding' | 'xv' | 'gala' | 'cocktail';

export interface Dress {
  id: string;
  name: string;
  nameEn: string;
  occasion: DressOccasion;
  /** Precio base de referencia para `RENTAL_BASE_DAYS` días. */
  price: number;
  sizes: string[];
  tone: string;
  accent: string;
  tagline: string;
  taglineEn: string;
  image: string;
}

/** Días incluidos en el precio publicado del catálogo. */
export const RENTAL_BASE_DAYS = 4;

/** Rango que el cliente puede elegir en la ficha. */
export const RENTAL_DAY_OPTIONS = [1, 2, 3, 4, 5, 6, 7] as const;

export function estimateRentalPrice(basePrice: number, days: number): number {
  const safeDays = Math.max(1, Math.round(days));
  return Math.round((basePrice / RENTAL_BASE_DAYS) * safeDays);
}

export function dressRentalWhatsAppUrl(
  dressName: string,
  days: number,
  estimatedPrice: number,
  lang: 'es' | 'en' = 'es'
): string {
  const text =
    lang === 'en'
      ? `Hi, I'd like to rent "${dressName}" for ${days} day(s). Estimated total: $${estimatedPrice}. Could you confirm availability?`
      : `Hola, quiero rentar "${dressName}" por ${days} día(s). Total estimado: $${estimatedPrice}. ¿Me confirman disponibilidad?`;
  return `https://wa.me/526621833771?text=${encodeURIComponent(text)}`;
}

export const DRESSES: Dress[] = [
  {
    id: 'zafiro',
    name: 'Zafiro',
    nameEn: 'Sapphire',
    occasion: 'gala',
    price: 1890,
    sizes: ['XS', 'S', 'M'],
    tone: '#1a3a7a',
    accent: '#5b8fd9',
    tagline: 'Sirena azul con brillo radial',
    taglineEn: 'Blue mermaid with radial sparkle',
    image: 'assets/dresses/ck-1.jpg',
  },
  {
    id: 'savanna',
    name: 'Savanna',
    nameEn: 'Savanna',
    occasion: 'cocktail',
    price: 1590,
    sizes: ['S', 'M', 'L'],
    tone: '#c4a484',
    accent: '#2a211c',
    tagline: 'Animal print con caída larga',
    taglineEn: 'Animal print with long fall',
    image: 'assets/dresses/ck-2.jpg',
  },
  {
    id: 'nocturna',
    name: 'Nocturna',
    nameEn: 'Nocturne',
    occasion: 'gala',
    price: 2190,
    sizes: ['XS', 'S', 'M'],
    tone: '#141414',
    accent: '#d4af87',
    tagline: 'Encaje ilusión y capa de tul',
    taglineEn: 'Illusion lace with tulle overlay',
    image: 'assets/dresses/ck-4.jpg',
  },
  {
    id: 'medianoche',
    name: 'Medianoche',
    nameEn: 'Midnight',
    occasion: 'xv',
    price: 2090,
    sizes: ['XS', 'S', 'M', 'L'],
    tone: '#1a2744',
    accent: '#8a94a8',
    tagline: 'Bodice estructurado y falda de tul',
    taglineEn: 'Structured bodice and tulle skirt',
    image: 'assets/dresses/ck-5.jpg',
  },
  {
    id: 'sol',
    name: 'Sol',
    nameEn: 'Sol',
    occasion: 'xv',
    price: 1990,
    sizes: ['S', 'M', 'L'],
    tone: '#e8b84a',
    accent: '#f5d98a',
    tagline: 'Amarillo sirena con volantes',
    taglineEn: 'Yellow mermaid with ruffles',
    image: 'assets/dresses/ck-6.jpg',
  },
  {
    id: 'pluma',
    name: 'Pluma',
    nameEn: 'Plume',
    occasion: 'cocktail',
    price: 1790,
    sizes: ['XS', 'S', 'M'],
    tone: '#c0c4c8',
    accent: '#e8a0b0',
    tagline: 'Plata lentejuela con plumas rosa',
    taglineEn: 'Silver sequin with pink feathers',
    image: 'assets/dresses/ck-7.jpg',
  },
];

export const OCCASIONS: { id: DressOccasion | 'all'; labelKey: string }[] = [
  { id: 'all', labelKey: 'collection.filter.all' },
  { id: 'wedding', labelKey: 'collection.filter.wedding' },
  { id: 'xv', labelKey: 'collection.filter.xv' },
  { id: 'gala', labelKey: 'collection.filter.gala' },
  { id: 'cocktail', labelKey: 'collection.filter.cocktail' },
];
