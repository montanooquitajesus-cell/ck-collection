export type MassageCategory = 'relaxing' | 'therapeutic' | 'sculpting';

export interface Massage {
  id: string;
  name: string;
  nameEn: string;
  category: MassageCategory;
  durationMin: number;
  price: number;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  image: string;
}

export const MASSAGES: Massage[] = [
  {
    id: 'relajantes',
    name: 'Masajes relajantes',
    nameEn: 'Relaxing massages',
    category: 'relaxing',
    durationMin: 60,
    price: 550,
    tagline: 'Calma profunda para cuerpo y mente',
    taglineEn: 'Deep calm for body and mind',
    description:
      'Sesión suave de cuerpo completo con movimientos lentos para soltar estrés, mejorar el descanso y recuperar bienestar.',
    descriptionEn:
      'Gentle full-body session with slow movements to release stress, improve rest, and restore wellbeing.',
    image: 'assets/massages/relajante.jpg',
  },
  {
    id: 'descontracturantes',
    name: 'Masajes descontracturantes',
    nameEn: 'Deep tissue massages',
    category: 'therapeutic',
    durationMin: 60,
    price: 650,
    tagline: 'Alivio de nudos y tensión muscular',
    taglineEn: 'Relief for knots and muscle tension',
    description:
      'Enfoque terapéutico en zonas contracturadas — cuello, espalda y hombros — para liberar tensión acumulada.',
    descriptionEn:
      'Therapeutic focus on contracted areas — neck, back, and shoulders — to release built-up tension.',
    image: 'assets/massages/descontracturante.jpg',
  },
  {
    id: 'maderoterapia',
    name: 'Maderoterapia',
    nameEn: 'Wood therapy',
    category: 'sculpting',
    durationMin: 60,
    price: 700,
    tagline: 'Modelado con instrumentos de madera',
    taglineEn: 'Contouring with wooden instruments',
    description:
      'Técnica con rodillos y herramientas de madera para estimular circulación, trabajar tejidos y apoyar el contorno corporal.',
    descriptionEn:
      'Technique using wooden rollers and tools to stimulate circulation, work tissues, and support body contour.',
    image: 'assets/massages/maderoterapia.jpg',
  },
  {
    id: 'moldeador-vendaje',
    name: 'Moldeador y reductivo con vendaje',
    nameEn: 'Sculpting wrap with bandage',
    category: 'sculpting',
    durationMin: 75,
    price: 850,
    tagline: 'Modelado corporal con vendaje',
    taglineEn: 'Body sculpting with wrap bandage',
    description:
      'Tratamiento moldeador y reductivo con vendaje para trabajar zonas específicas y potenciar la sensación de contorno firmado.',
    descriptionEn:
      'Sculpting and reductive treatment with bandage wrap to target specific areas and enhance a firmer contour feel.',
    image: 'assets/massages/moldeador.jpg',
  },
];

export const MASSAGE_CATEGORIES: { id: MassageCategory | 'all'; labelKey: string }[] = [
  { id: 'all', labelKey: 'massages.filter.all' },
  { id: 'relaxing', labelKey: 'massages.filter.relaxing' },
  { id: 'therapeutic', labelKey: 'massages.filter.therapeutic' },
  { id: 'sculpting', labelKey: 'massages.filter.sculpting' },
];

export function massageWhatsAppUrl(serviceName: string, lang: 'es' | 'en' = 'es'): string {
  const text =
    lang === 'en'
      ? `Hi, I'd like to book: ${serviceName}`
      : `Hola, quiero agendar: ${serviceName}`;
  return `https://wa.me/526621833771?text=${encodeURIComponent(text)}`;
}

export const MASSAGE_WHATSAPP_GENERIC =
  'https://wa.me/526621833771?text=' +
  encodeURIComponent('Hola, quiero agendar un masaje. ¿Me ayudan con disponibilidad?');
