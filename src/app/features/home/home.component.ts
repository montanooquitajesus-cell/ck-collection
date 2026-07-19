import { Component, DestroyRef, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
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
  readonly heroStage = viewChild<ElementRef<HTMLElement>>('heroStage');

  private intervalId: number | null = null;
  private readonly slideMs = 6000;

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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    queueMicrotask(() => this.watchHeroVisibility());
  }

  private watchHeroVisibility() {
    const el = this.heroStage()?.nativeElement;
    if (!el || typeof IntersectionObserver === 'undefined') {
      this.startCarousel();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) this.startCarousel();
        else this.stopCarousel();
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    this.destroyRef.onDestroy(() => {
      observer.disconnect();
      this.stopCarousel();
    });
  }

  private startCarousel() {
    if (this.intervalId !== null) return;
    this.intervalId = window.setInterval(() => this.nextSlide(), this.slideMs);
  }

  private stopCarousel() {
    if (this.intervalId === null) return;
    clearInterval(this.intervalId);
    this.intervalId = null;
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
