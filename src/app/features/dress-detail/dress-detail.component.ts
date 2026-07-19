import { Component, computed, effect, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageService } from '../../core/services/language.service';
import {
  DRESSES,
  RENTAL_BASE_DAYS,
  RENTAL_DAY_OPTIONS,
  dressRentalWhatsAppUrl,
  estimateRentalPrice,
} from '../../core/data/dresses';

@Component({
  selector: 'app-dress-detail',
  imports: [RouterLink, TranslatePipe, DecimalPipe],
  templateUrl: './dress-detail.component.html',
  standalone: true,
})
export class DressDetailComponent {
  private readonly route = inject(ActivatedRoute);
  readonly lang = inject(LanguageService);

  readonly dayOptions = RENTAL_DAY_OPTIONS;
  readonly baseDays = RENTAL_BASE_DAYS;
  readonly selectedDays = signal<number>(RENTAL_BASE_DAYS);
  readonly selectedSize = signal<string>('');

  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id'))), {
    initialValue: null,
  });

  readonly dress = computed(() => DRESSES.find((d) => d.id === this.id()) ?? null);

  readonly estimatedPrice = computed(() => {
    const d = this.dress();
    if (!d) return 0;
    return estimateRentalPrice(d.price, this.selectedDays());
  });

  constructor() {
    effect(() => {
      const d = this.dress();
      if (!d?.sizes.length) {
        this.selectedSize.set('');
        return;
      }
      const current = this.selectedSize();
      if (!current || !d.sizes.includes(current)) {
        this.selectedSize.set(d.sizes.includes('M') ? 'M' : d.sizes[0]);
      }
    });
  }

  name(): string {
    const d = this.dress();
    if (!d) return '';
    return this.lang.currentLang() === 'en' ? d.nameEn : d.name;
  }

  tagline(): string {
    const d = this.dress();
    if (!d) return '';
    return this.lang.currentLang() === 'en' ? d.taglineEn : d.tagline;
  }

  occasionKey(): string {
    const d = this.dress();
    if (!d) return '';
    return `collection.filter.${d.occasion}`;
  }

  setDays(days: number) {
    this.selectedDays.set(days);
  }

  setSize(size: string) {
    this.selectedSize.set(size);
  }

  whatsappUrl(): string {
    return dressRentalWhatsAppUrl(
      this.name(),
      this.selectedDays(),
      this.estimatedPrice(),
      this.selectedSize() || '—',
      this.lang.currentLang()
    );
  }
}
