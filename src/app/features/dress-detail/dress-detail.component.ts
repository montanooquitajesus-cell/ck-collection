import { Component, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageService } from '../../core/services/language.service';
import { DRESSES } from '../../core/data/dresses';

@Component({
  selector: 'app-dress-detail',
  imports: [RouterLink, TranslatePipe, DecimalPipe],
  templateUrl: './dress-detail.component.html',
  standalone: true,
})
export class DressDetailComponent {
  private readonly route = inject(ActivatedRoute);
  readonly lang = inject(LanguageService);

  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id'))), {
    initialValue: null,
  });

  readonly dress = computed(() => DRESSES.find((d) => d.id === this.id()) ?? null);

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
}
