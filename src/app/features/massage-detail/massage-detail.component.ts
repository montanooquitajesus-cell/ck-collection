import { Component, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageService } from '../../core/services/language.service';
import { MASSAGES, massageWhatsAppUrl } from '../../core/data/massages';

@Component({
  selector: 'app-massage-detail',
  imports: [RouterLink, TranslatePipe, DecimalPipe],
  templateUrl: './massage-detail.component.html',
  standalone: true,
})
export class MassageDetailComponent {
  private readonly route = inject(ActivatedRoute);
  readonly lang = inject(LanguageService);

  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id'))), {
    initialValue: null,
  });

  readonly massage = computed(() => MASSAGES.find((m) => m.id === this.id()) ?? null);

  name(): string {
    const m = this.massage();
    if (!m) return '';
    return this.lang.currentLang() === 'en' ? m.nameEn : m.name;
  }

  tagline(): string {
    const m = this.massage();
    if (!m) return '';
    return this.lang.currentLang() === 'en' ? m.taglineEn : m.tagline;
  }

  description(): string {
    const m = this.massage();
    if (!m) return '';
    return this.lang.currentLang() === 'en' ? m.descriptionEn : m.description;
  }

  categoryKey(): string {
    const m = this.massage();
    if (!m) return '';
    return `massages.filter.${m.category}`;
  }

  whatsappUrl(): string {
    return massageWhatsAppUrl(this.name(), this.lang.currentLang());
  }
}
