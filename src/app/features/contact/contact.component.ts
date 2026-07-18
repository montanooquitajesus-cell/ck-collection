import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { MASSAGE_WHATSAPP_GENERIC } from '../../core/data/massages';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  standalone: true,
})
export class ContactComponent {
  readonly massageWhatsApp = MASSAGE_WHATSAPP_GENERIC;

  readonly faqs = [
    { q: 'contact.faq.1.q', a: 'contact.faq.1.a' },
    { q: 'contact.faq.2.q', a: 'contact.faq.2.a' },
    { q: 'contact.faq.3.q', a: 'contact.faq.3.a' },
    { q: 'contact.faq.4.q', a: 'contact.faq.4.a' },
    { q: 'contact.faq.5.q', a: 'contact.faq.5.a' },
    { q: 'contact.faq.6.q', a: 'contact.faq.6.a' },
  ];
}
