import { Component, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageService } from '../../core/services/language.service';
import {
  MASSAGES,
  MASSAGE_CATEGORIES,
  MassageCategory,
} from '../../core/data/massages';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-massages',
  imports: [RouterLink, TranslatePipe, DecimalPipe],
  templateUrl: './massages.component.html',
  standalone: true,
})
export class MassagesComponent {
  private readonly route = inject(ActivatedRoute);
  readonly lang = inject(LanguageService);

  readonly categories = MASSAGE_CATEGORIES;
  readonly selected = signal<MassageCategory | 'all'>('all');

  private readonly queryCategory = toSignal(
    this.route.queryParamMap.pipe(map((p) => p.get('categoria'))),
    { initialValue: null }
  );

  readonly massages = computed(() => {
    const fromQuery = this.queryCategory();
    const filter =
      fromQuery === 'relaxing' ||
      fromQuery === 'therapeutic' ||
      fromQuery === 'sculpting'
        ? fromQuery
        : this.selected();

    if (filter === 'all') return MASSAGES;
    return MASSAGES.filter((m) => m.category === filter);
  });

  readonly activeFilter = computed(() => {
    const fromQuery = this.queryCategory();
    if (
      fromQuery === 'relaxing' ||
      fromQuery === 'therapeutic' ||
      fromQuery === 'sculpting'
    ) {
      return fromQuery;
    }
    return this.selected();
  });

  setFilter(id: MassageCategory | 'all') {
    this.selected.set(id);
  }

  massageName(name: string, nameEn: string): string {
    return this.lang.currentLang() === 'en' ? nameEn : name;
  }

  massageTagline(tagline: string, taglineEn: string): string {
    return this.lang.currentLang() === 'en' ? taglineEn : tagline;
  }
}
