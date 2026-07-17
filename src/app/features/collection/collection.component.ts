import { Component, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageService } from '../../core/services/language.service';
import { DRESSES, OCCASIONS, DressOccasion } from '../../core/data/dresses';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-collection',
  imports: [RouterLink, TranslatePipe, DecimalPipe],
  templateUrl: './collection.component.html',
  standalone: true,
})
export class CollectionComponent {
  private readonly route = inject(ActivatedRoute);
  readonly lang = inject(LanguageService);

  readonly occasions = OCCASIONS;
  readonly selected = signal<DressOccasion | 'all'>('all');

  private readonly queryOccasion = toSignal(
    this.route.queryParamMap.pipe(map((p) => p.get('ocasion'))),
    { initialValue: null }
  );

  readonly dresses = computed(() => {
    const fromQuery = this.queryOccasion();
    const filter =
      fromQuery === 'wedding' ||
      fromQuery === 'xv' ||
      fromQuery === 'gala' ||
      fromQuery === 'cocktail'
        ? fromQuery
        : this.selected();

    if (filter === 'all') return DRESSES;
    return DRESSES.filter((d) => d.occasion === filter);
  });

  readonly activeFilter = computed(() => {
    const fromQuery = this.queryOccasion();
    if (
      fromQuery === 'wedding' ||
      fromQuery === 'xv' ||
      fromQuery === 'gala' ||
      fromQuery === 'cocktail'
    ) {
      return fromQuery;
    }
    return this.selected();
  });

  setFilter(id: DressOccasion | 'all') {
    this.selected.set(id);
  }

  dressName(name: string, nameEn: string): string {
    return this.lang.currentLang() === 'en' ? nameEn : name;
  }

  dressTagline(tagline: string, taglineEn: string): string {
    return this.lang.currentLang() === 'en' ? taglineEn : tagline;
  }
}
