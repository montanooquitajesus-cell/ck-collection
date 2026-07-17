export type DressOccasion = 'wedding' | 'xv' | 'gala' | 'cocktail';

export interface Dress {
  id: string;
  name: string;
  nameEn: string;
  occasion: DressOccasion;
  price: number;
  sizes: string[];
  tone: string;
  accent: string;
  tagline: string;
  taglineEn: string;
  image: string;
}

export const DRESSES: Dress[] = [
  {
    id: 'aurora',
    name: 'Aurora',
    nameEn: 'Aurora',
    occasion: 'gala',
    price: 1890,
    sizes: ['XS', 'S', 'M'],
    tone: '#2a1f24',
    accent: '#c4788a',
    tagline: 'Satinado con caída larga',
    taglineEn: 'Long-fall satin silhouette',
    image: 'assets/dresses/aurora.jpg',
  },
  {
    id: 'luna',
    name: 'Luna',
    nameEn: 'Luna',
    occasion: 'wedding',
    price: 2490,
    sizes: ['S', 'M', 'L'],
    tone: '#ebe4e0',
    accent: '#8f3d52',
    tagline: 'Marfil con detalle floral',
    taglineEn: 'Ivory with floral detail',
    image: 'assets/dresses/luna.jpg',
  },
  {
    id: 'celeste',
    name: 'Celeste',
    nameEn: 'Celeste',
    occasion: 'xv',
    price: 2190,
    sizes: ['XS', 'S', 'M', 'L'],
    tone: '#3d4a6b',
    accent: '#b7c4e0',
    tagline: 'Volumen de ensueño',
    taglineEn: 'Dreamy volume',
    image: 'assets/dresses/celeste.jpg',
  },
  {
    id: 'noir',
    name: 'Noir Édition',
    nameEn: 'Noir Édition',
    occasion: 'cocktail',
    price: 1590,
    sizes: ['XS', 'S', 'M'],
    tone: '#141414',
    accent: '#d4af87',
    tagline: 'Cóctel con brillo sutil',
    taglineEn: 'Cocktail with soft shimmer',
    image: 'assets/dresses/noir.jpg',
  },
  {
    id: 'rosa',
    name: 'Rosa Antigua',
    nameEn: 'Antique Rose',
    occasion: 'gala',
    price: 1990,
    sizes: ['S', 'M', 'L'],
    tone: '#6e3a48',
    accent: '#e8c4cc',
    tagline: 'Drapeado romántico',
    taglineEn: 'Romantic drape',
    image: 'assets/dresses/rosa.jpg',
  },
  {
    id: 'perla',
    name: 'Perla',
    nameEn: 'Perla',
    occasion: 'wedding',
    price: 2290,
    sizes: ['XS', 'S', 'M'],
    tone: '#f0ebe6',
    accent: '#9a7b6a',
    tagline: 'Minimal con cola suave',
    taglineEn: 'Minimal with soft train',
    image: 'assets/dresses/perla.jpg',
  },
];

export const OCCASIONS: { id: DressOccasion | 'all'; labelKey: string }[] = [
  { id: 'all', labelKey: 'collection.filter.all' },
  { id: 'wedding', labelKey: 'collection.filter.wedding' },
  { id: 'xv', labelKey: 'collection.filter.xv' },
  { id: 'gala', labelKey: 'collection.filter.gala' },
  { id: 'cocktail', labelKey: 'collection.filter.cocktail' },
];
