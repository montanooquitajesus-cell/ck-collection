export type TranslationMap = Record<string, string>;

export const TRANSLATIONS: Record<'es' | 'en', TranslationMap> = {
  es: {
    'common.rights': '© CK Collection. Hermosillo, Sonora. Todos los derechos reservados.',
    'footer.tagline':
      'Renta de vestidos y masajes en Hermosillo. Estilo y bienestar en un solo lugar.',
    'footer.location': 'Hermosillo',
    'nav.collection': 'Colección',
    'nav.massages': 'Masajes',
    'nav.how': 'Cómo rentar',
    'nav.contact': 'Contacto',
    'nav.cta': 'Agendar cita',

    'home.city': 'Hermosillo, Sonora',
    'home.headline': 'Estilo y bienestar. En un solo lugar.',
    'home.sub':
      'Renta de vestidos para cada ocasión y masajes para recuperar el cuerpo. Agenda tu cita en Hermosillo.',
    'home.cta.primary': 'Ver colección',
    'home.cta.secondary': 'Ver masajes',

    'home.how.title': 'Cómo rentar',
    'home.how.sub': 'Un proceso simple, pensado para que solo te preocupes por brillar.',
    'home.how.1.title': 'Elige tu vestido',
    'home.how.1.desc': 'Explora la colección por ocasión, color o estilo.',
    'home.how.2.title': 'Reserva tu fecha',
    'home.how.2.desc': 'Confirma disponibilidad y agenda tu prueba en nuestro showroom.',
    'home.how.3.title': 'Luce y devuelve',
    'home.how.3.desc': 'Recoge en Hermosillo, disfruta tu evento y regresa el look.',

    'home.featured.title': 'Piezas destacadas',
    'home.featured.sub': 'Selección curada para esta temporada en Hermosillo.',
    'home.featured.cta': 'Ver toda la colección',

    'home.massages.title': 'Masajes destacados',
    'home.massages.sub': 'Sesiones pensadas para soltar tensión y recuperar calma.',
    'home.massages.cta': 'Ver todos los masajes',

    'home.occasions.title': 'Para cada momento',
    'home.occasions.sub': 'Looks pensados para la ocasión exacta.',

    'collection.title': 'Colección',
    'collection.sub': 'Vestidos listos para rentar en Hermosillo. Filtra por ocasión y encuentra tu look.',
    'collection.filter.all': 'Todos',
    'collection.filter.wedding': 'Boda',
    'collection.filter.xv': 'XV años',
    'collection.filter.gala': 'Gala',
    'collection.filter.cocktail': 'Cocktail',
    'collection.from': 'Desde',
    'collection.days': '/ desde 4 días',
    'collection.view': 'Ver detalle',

    'massages.title': 'Masajes',
    'massages.sub':
      'Sesiones de bienestar en Hermosillo. Elige tu servicio y agenda por WhatsApp.',
    'massages.filter.all': 'Todos',
    'massages.filter.relaxing': 'Relajantes',
    'massages.filter.therapeutic': 'Descontracturantes',
    'massages.filter.sculpting': 'Modeladores',
    'massages.min': 'min',
    'massages.view': 'Ver detalle',

    'massage.detail.back': 'Volver a masajes',
    'massage.detail.category': 'Tipo',
    'massage.detail.includes': 'Incluye consulta breve previa y espacio privado por cita.',
    'massage.detail.book': 'Agendar por WhatsApp',
    'massage.detail.notFound': 'Servicio no encontrado.',

    'how.title': 'Cómo funciona',
    'how.sub': 'Rentar con CK Collection en Hermosillo es fácil, transparente y sin sorpresas.',
    'how.step1.title': '1. Explora',
    'how.step1.desc':
      'Navega la colección online o visita el showroom en Colonia Y Griega. Cada pieza incluye tallas y precio de renta.',
    'how.step2.title': '2. Reserva',
    'how.step2.desc':
      'Elige fechas del evento, confirma talla y deja un depósito reembolsable. Te acompañamos en la prueba.',
    'how.step3.title': '3. Disfruta',
    'how.step3.desc':
      'Recoge tu vestido en Hermosillo. Al terminar, lo devuelves según la guía de cuidado.',
    'how.note.title': 'Qué incluye',
    'how.note.1': 'Elige cuántos días necesitas (1 a 7)',
    'how.note.2': 'Prueba de vestido previa',
    'how.note.3': 'Guía de cuidado y devolución',
    'how.note.4': 'Asesoría de estilo por cita',
    'how.cta': 'Agendar una cita',

    'contact.title': 'Visítanos en Hermosillo',
    'contact.sub':
      '¿Renta de vestido o masaje? Escríbenos por WhatsApp o agenda tu cita en el showroom.',
    'contact.whatsapp': 'Escribir por WhatsApp',
    'contact.whatsapp.massage': 'Agendar masaje',
    'contact.phones': 'Teléfonos',
    'contact.showroom': 'Showroom',
    'contact.showroom.hours': 'Citas previas · Lun–Sáb',
    'contact.map.title': 'Cómo llegar',
    'contact.map.sub': 'Zapateros #25, Colonia Y Griega · Hermosillo, Sonora',
    'contact.map.open': 'Abrir en Google Maps',
    'contact.faq.title': 'Preguntas frecuentes',
    'contact.faq.1.q': '¿Cuántos días puedo rentar?',
    'contact.faq.1.a':
      'Tú eliges: en la ficha del vestido puedes seleccionar de 1 a 7 días. El precio se ajusta según el período y lo confirmamos por WhatsApp.',
    'contact.faq.2.q': '¿Qué pasa si no me queda?',
    'contact.faq.2.a':
      'Agenda una prueba en Hermosillo. Si hace falta, te ayudamos a cambiar de talla o de modelo.',
    'contact.faq.3.q': '¿Hay depósito?',
    'contact.faq.3.a': 'Sí, un depósito reembolsable al devolver el vestido en buen estado.',
    'contact.faq.4.q': '¿Puedo rentar accesorios?',
    'contact.faq.4.a': 'Sí: clutch, joyería y piezas complementarias según disponibilidad.',
    'contact.faq.5.q': '¿Cómo agendo un masaje?',
    'contact.faq.5.a':
      'Elige el servicio en la sección Masajes y escríbenos por WhatsApp con tu horario preferido.',
    'contact.faq.6.q': '¿Los masajes son con cita previa?',
    'contact.faq.6.a':
      'Sí. Todas las sesiones son por cita para garantizar espacio privado y atención personalizada.',

    'detail.back': 'Volver a colección',
    'detail.rent': 'Consultar por WhatsApp',
    'detail.size': 'Tallas',
    'detail.occasion': 'Ocasión',
    'detail.includes': 'Incluye asesoría de estilo. El total final se confirma al agendar.',
    'detail.days.label': 'Días de renta',
    'detail.days.unit': 'días',
    'detail.days.hint': 'Elige cuántos días necesitas. El precio se recalcula al instante.',
    'detail.price.note': 'Estimado según los días elegidos (precio base de referencia: 4 días).',
    'detail.notFound': 'Vestido no encontrado.',
  },
  en: {
    'common.rights': '© CK Collection. Hermosillo, Sonora. All rights reserved.',
    'footer.tagline':
      'Dress rentals and massage in Hermosillo. Style and wellbeing in one place.',
    'footer.location': 'Hermosillo',
    'nav.collection': 'Collection',
    'nav.massages': 'Massage',
    'nav.how': 'How it works',
    'nav.contact': 'Contact',
    'nav.cta': 'Book appointment',

    'home.city': 'Hermosillo, Sonora',
    'home.headline': 'Style and wellbeing. In one place.',
    'home.sub':
      'Dress rentals for every occasion and massage to restore the body. Book your appointment in Hermosillo.',
    'home.cta.primary': 'Browse collection',
    'home.cta.secondary': 'Browse massage',

    'home.how.title': 'How renting works',
    'home.how.sub': 'A simple process so you only worry about shining.',
    'home.how.1.title': 'Pick your dress',
    'home.how.1.desc': 'Browse by occasion, color, or style.',
    'home.how.2.title': 'Reserve your date',
    'home.how.2.desc': 'Confirm availability and book a fitting at our showroom.',
    'home.how.3.title': 'Wear & return',
    'home.how.3.desc': 'Pick up in Hermosillo, enjoy your event, then return the look.',

    'home.featured.title': 'Featured pieces',
    'home.featured.sub': 'A curated selection for this season in Hermosillo.',
    'home.featured.cta': 'See full collection',

    'home.massages.title': 'Featured massage',
    'home.massages.sub': 'Sessions designed to release tension and restore calm.',
    'home.massages.cta': 'See all massage services',

    'home.occasions.title': 'For every moment',
    'home.occasions.sub': 'Looks designed for the exact occasion.',

    'collection.title': 'Collection',
    'collection.sub': 'Dresses ready to rent in Hermosillo. Filter by occasion and find your look.',
    'collection.filter.all': 'All',
    'collection.filter.wedding': 'Wedding',
    'collection.filter.xv': 'Quinceañera',
    'collection.filter.gala': 'Gala',
    'collection.filter.cocktail': 'Cocktail',
    'collection.from': 'From',
    'collection.days': '/ from 4 days',
    'collection.view': 'View details',

    'massages.title': 'Massage',
    'massages.sub':
      'Wellness sessions in Hermosillo. Choose a service and book on WhatsApp.',
    'massages.filter.all': 'All',
    'massages.filter.relaxing': 'Relaxing',
    'massages.filter.therapeutic': 'Deep tissue',
    'massages.filter.sculpting': 'Sculpting',
    'massages.min': 'min',
    'massages.view': 'View details',

    'massage.detail.back': 'Back to massage',
    'massage.detail.category': 'Type',
    'massage.detail.includes': 'Includes a brief pre-session check-in and a private appointment space.',
    'massage.detail.book': 'Book on WhatsApp',
    'massage.detail.notFound': 'Service not found.',

    'how.title': 'How it works',
    'how.sub': 'Renting with CK Collection in Hermosillo is easy, clear, and surprise-free.',
    'how.step1.title': '1. Explore',
    'how.step1.desc':
      'Browse online or visit the showroom in Colonia Y Griega. Each piece lists sizes and rental price.',
    'how.step2.title': '2. Reserve',
    'how.step2.desc':
      'Choose event dates, confirm size, and leave a refundable deposit. We support you at the fitting.',
    'how.step3.title': '3. Enjoy',
    'how.step3.desc':
      'Pick up your dress in Hermosillo. When done, return it following the care guide.',
    'how.note.title': 'What’s included',
    'how.note.1': 'Choose how many days you need (1 to 7)',
    'how.note.2': 'Pre-event fitting',
    'how.note.3': 'Care & return guide',
    'how.note.4': 'Style advice by appointment',
    'how.cta': 'Book an appointment',

    'contact.title': 'Visit us in Hermosillo',
    'contact.sub':
      'Dress rental or massage? Message us on WhatsApp or book a showroom appointment.',
    'contact.whatsapp': 'Message on WhatsApp',
    'contact.whatsapp.massage': 'Book a massage',
    'contact.phones': 'Phones',
    'contact.showroom': 'Showroom',
    'contact.showroom.hours': 'By appointment · Mon–Sat',
    'contact.map.title': 'How to find us',
    'contact.map.sub': 'Zapateros #25, Colonia Y Griega · Hermosillo, Sonora',
    'contact.map.open': 'Open in Google Maps',
    'contact.faq.title': 'FAQ',
    'contact.faq.1.q': 'How many days can I rent?',
    'contact.faq.1.a':
      'You choose: on each dress page you can select 1 to 7 days. The price adjusts to the period and we confirm on WhatsApp.',
    'contact.faq.2.q': 'What if it doesn’t fit?',
    'contact.faq.2.a':
      'Book a fitting in Hermosillo. If needed, we’ll help you change size or style.',
    'contact.faq.3.q': 'Is there a deposit?',
    'contact.faq.3.a': 'Yes — a refundable deposit when the dress is returned in good condition.',
    'contact.faq.4.q': 'Can I rent accessories?',
    'contact.faq.4.a': 'Yes: clutches, jewelry, and complementary pieces based on availability.',
    'contact.faq.5.q': 'How do I book a massage?',
    'contact.faq.5.a':
      'Pick a service in Massage and message us on WhatsApp with your preferred time.',
    'contact.faq.6.q': 'Are massages by appointment?',
    'contact.faq.6.a':
      'Yes. Every session is appointment-only so we can guarantee a private space and focused care.',

    'detail.back': 'Back to collection',
    'detail.rent': 'Ask on WhatsApp',
    'detail.size': 'Sizes',
    'detail.occasion': 'Occasion',
    'detail.includes': 'Includes style advice. Final total is confirmed when you book.',
    'detail.days.label': 'Rental days',
    'detail.days.unit': 'days',
    'detail.days.hint': 'Pick how many days you need. The price updates instantly.',
    'detail.price.note': 'Estimate based on selected days (reference base price: 4 days).',
    'detail.notFound': 'Dress not found.',
  },
};
