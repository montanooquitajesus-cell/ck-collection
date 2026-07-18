import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService, Language } from './core/services/language.service';
import { TranslatePipe } from './shared/pipes/translate.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  readonly langService = inject(LanguageService);
  readonly isMenuOpen = signal(false);

  readonly navLinks = [
    { path: '/coleccion', labelKey: 'nav.collection' },
    { path: '/masajes', labelKey: 'nav.massages' },
    { path: '/como-rentar', labelKey: 'nav.how' },
    { path: '/contacto', labelKey: 'nav.contact' },
  ];

  toggleLanguage() {
    const nextLang: Language = this.langService.currentLang() === 'es' ? 'en' : 'es';
    this.langService.setLanguage(nextLang);
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
