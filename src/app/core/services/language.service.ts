import { Injectable, signal, computed, effect } from '@angular/core';
import { TRANSLATIONS } from '../translations';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly STORAGE_KEY = 'ck_lang';
  private readonly SUPPORTED: Language[] = ['es', 'en'];

  readonly currentLang = signal<Language>('es');

  readonly activeTranslations = computed(() => {
    return TRANSLATIONS[this.currentLang()];
  });

  constructor() {
    this.currentLang.set(this.detectLanguage());

    effect(() => {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = this.currentLang();
      }
    });
  }

  private normalizeLang(lang: string | null): Language | null {
    if (!lang) return null;
    const short = lang.toLowerCase().split('-')[0] as Language;
    return this.SUPPORTED.includes(short) ? short : null;
  }

  private detectLanguage(): Language {
    if (typeof window === 'undefined') return 'es';

    const query = new URLSearchParams(window.location.search).get('lang');
    const fromQuery = this.normalizeLang(query);
    if (fromQuery) return fromQuery;

    const fromStorage = this.normalizeLang(localStorage.getItem(this.STORAGE_KEY));
    if (fromStorage) return fromStorage;

    const fromBrowser = this.normalizeLang(navigator.language);
    if (fromBrowser) return fromBrowser;

    return 'es';
  }

  setLanguage(lang: Language) {
    if (this.SUPPORTED.includes(lang)) {
      this.currentLang.set(lang);
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, lang);
      }
    }
  }

  t(key: string): string {
    const active = this.activeTranslations();
    const value = active[key];
    if (typeof value === 'string') return value;

    const fallbackValue = TRANSLATIONS.es[key];
    if (typeof fallbackValue === 'string') return fallbackValue;

    return key;
  }
}
