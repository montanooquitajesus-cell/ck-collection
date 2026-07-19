import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageService } from '../../core/services/language.service';
import { DRESSES } from '../../core/data/dresses';
import { MASSAGES } from '../../core/data/massages';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslatePipe, DecimalPipe],
  templateUrl: './home.component.html',
  standalone: true,
})
export class HomeComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  readonly lang = inject(LanguageService);
  readonly featured = DRESSES.slice(0, 3);
  readonly featuredMassages = MASSAGES.slice(0, 3);
  readonly carousel = DRESSES;
  readonly slideIndex = signal(0);

  readonly howSteps = [
    { titleKey: 'home.how.1.title', descKey: 'home.how.1.desc', icon: 'bi-bag-heart' },
    { titleKey: 'home.how.2.title', descKey: 'home.how.2.desc', icon: 'bi-calendar2-check' },
    { titleKey: 'home.how.3.title', descKey: 'home.how.3.desc', icon: 'bi-stars' },
  ];

  readonly occasions = [
    {
      key: 'gala',
      labelKey: 'collection.filter.gala',
      path: '/coleccion',
      hint: 'Zafiro · Nocturna · Sol',
    },
    {
      key: 'cocktail',
      labelKey: 'collection.filter.cocktail',
      path: '/coleccion',
      hint: 'Savanna · Pluma',
    },
  ];

  ngOnInit() {
    const id = window.setInterval(() => this.nextSlide(), 5000);
    this.destroyRef.onDestroy(() => clearInterval(id));
  }

  nextSlide() {
    this.slideIndex.update((i) => (i + 1) % this.carousel.length);
  }

  prevSlide() {
    this.slideIndex.update((i) => (i - 1 + this.carousel.length) % this.carousel.length);
  }

  goToSlide(index: number) {
    this.slideIndex.set(index);
  }

  dressName(id: string): string {
    const d = this.featured.find((x) => x.id === id)!;
    return this.lang.currentLang() === 'en' ? d.nameEn : d.name;
  }

  dressTagline(id: string): string {
    const d = this.featured.find((x) => x.id === id)!;
    return this.lang.currentLang() === 'en' ? d.taglineEn : d.tagline;
  }

  massageName(id: string): string {
    const m = this.featuredMassages.find((x) => x.id === id)!;
    return this.lang.currentLang() === 'en' ? m.nameEn : m.name;
  }

  massageTagline(id: string): string {
    const m = this.featuredMassages.find((x) => x.id === id)!;
    return this.lang.currentLang() === 'en' ? m.taglineEn : m.tagline;
  }
}
