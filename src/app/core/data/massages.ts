export type MassageCategory = 'relaxing' | 'therapeutic' | 'specialty';

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
    id: 'relajante',
    name: 'Masaje relajante',
    nameEn: 'Relaxing massage',
    category: 'relaxing',
    durationMin: 60,
    price: 550,
    tagline: 'Suavidad y calma profunda',
    taglineEn: 'Softness and deep calm',
    description:
      'Masaje de cuerpo completo con movimientos lentos y presión suave para soltar tensión y recuperar tranquilidad.',
    descriptionEn:
      'Full-body massage with slow movements and gentle pressure to release tension and restore calm.',
    image: 'assets/massages/relajante.jpg',
  },
  {
    id: 'descontracturante',
    name: 'Masaje descontracturante',
    nameEn: 'Deep tissue massage',
    category: 'therapeutic',
    durationMin: 60,
    price: 650,
    tagline: 'Alivio para cuello, espalda y hombros',
    taglineEn: 'Relief for neck, back, and shoulders',
    description:
      'Enfoque terapéutico en zonas de tensión crónica. Ideal si pasas mucho tiempo sentada o con estrés físico.',
    descriptionEn:
      'Therapeutic focus on chronic tension areas. Ideal if you sit for long periods or carry physical stress.',
    image: 'assets/massages/descontracturante.jpg',
  },
  {
    id: 'piedras-calientes',
    name: 'Piedras calientes',
    nameEn: 'Hot stone massage',
    category: 'specialty',
    durationMin: 75,
    price: 750,
    tagline: 'Calor suave y relajación profunda',
    taglineEn: 'Gentle heat and deep relaxation',
    description:
      'Combina masaje manual con piedras volcánicas tibias para abrir el músculo y prolongar la sensación de bienestar.',
    descriptionEn:
      'Combines hands-on work with warm volcanic stones to open the muscle and extend the sense of wellbeing.',
    image: 'assets/massages/piedras.jpg',
  },
  {
    id: 'craneofacial',
    name: 'Craneofacial',
    nameEn: 'Craniofacial massage',
    category: 'relaxing',
    durationMin: 45,
    price: 450,
    tagline: 'Rostro, cuello y cabeza',
    taglineEn: 'Face, neck, and scalp',
    description:
      'Sesión enfocada en cuero cabelludo, frente, sienes y cuello. Excelente para dolores de cabeza por tensión.',
    descriptionEn:
      'Session focused on scalp, forehead, temples, and neck. Excellent for tension headaches.',
    image: 'assets/massages/craneofacial.jpg',
  },
  {
    id: 'pareja',
    name: 'Masaje en pareja',
    nameEn: 'Couples massage',
    category: 'specialty',
    durationMin: 60,
    price: 1100,
    tagline: 'Dos camillas, una experiencia compartida',
    taglineEn: 'Two tables, one shared experience',
    description:
      'Dos masajes simultáneos en ambiente privado. Ideal para aniversarios, fechas especiales o un regalo juntos.',
    descriptionEn:
      'Two simultaneous massages in a private setting. Ideal for anniversaries, special dates, or a shared gift.',
    image: 'assets/massages/pareja.jpg',
  },
  {
    id: 'prenatal',
    name: 'Masaje prenatal',
    nameEn: 'Prenatal massage',
    category: 'therapeutic',
    durationMin: 60,
    price: 600,
    tagline: 'Cuidado seguro en el embarazo',
    taglineEn: 'Safe care during pregnancy',
    description:
      'Técnica adaptada al embarazo para aliviar espalda, piernas y fatiga. Consultamos trimestre y restricciones antes de la sesión.',
    descriptionEn:
      'Pregnancy-adapted technique to ease back, legs, and fatigue. We review trimester and restrictions before the session.',
    image: 'assets/massages/prenatal.jpg',
  },
];

export const MASSAGE_CATEGORIES: { id: MassageCategory | 'all'; labelKey: string }[] = [
  { id: 'all', labelKey: 'massages.filter.all' },
  { id: 'relaxing', labelKey: 'massages.filter.relaxing' },
  { id: 'therapeutic', labelKey: 'massages.filter.therapeutic' },
  { id: 'specialty', labelKey: 'massages.filter.specialty' },
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
